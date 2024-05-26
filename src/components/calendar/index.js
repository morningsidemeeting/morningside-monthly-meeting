import React, { useState, useEffect, Fragment } from "react";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import * as Styles from "./calendar.module.scss";
import Gapi, { loadAndInitGapi } from "../gapi";
import SEO from "../seo";
import { CALENDAR_IDS } from "../../shared/googleConfig";

async function fetchCalendar(calendarId, maxResults = 10) {
  // also accept calendar slugs
  if (CALENDAR_IDS[calendarId]) {
    calendarId = CALENDAR_IDS[calendarId];
  }
  console.log("fetch this calendar ID", calendarId);
  return new Promise(async (resolve, reject) => {
    try {
      loadAndInitGapi()
        .then((client) => {
          client.calendar.events
            .list({
              calendarId,
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              orderBy: "startTime",
              maxResults,
            })
            .then(function (response) {
              resolve(response.result.items);
            })
            .catch((error) => {
              resolve([]);
            });
        })
        .catch((error) => {
          console.log("Calendar was unable to load", error);
          resolve([]);
        });
    } catch (error) {
      console.log(error);
      resolve([]);
    }
  });
}

const Calendar = ({
  calendarIds = [CALENDAR_IDS.main],
  withFooter = true,
  pageTitle,
}) => {
  const [events, setEvents] = useState([]);
  const [hasFetchedEvents, setHasFetchedEvents] = useState(false);

  async function fetchCalendarEvents() {
    if (hasFetchedEvents) {
      return;
    }
    let loadedEvents = [];
    await Promise.all(
      calendarIds.map(async (calendarId) => {
        const calendarEvents = await fetchCalendar(calendarId);
        loadedEvents = loadedEvents.concat(...calendarEvents);
      })
    );

    setHasFetchedEvents(true);
    const groupedEvents = groupEvents(loadedEvents);
    setEvents(groupedEvents);
  }

  function groupEvents(events) {
    const eventsMap = new Map();
    return events
      .sort((evtA, evtB) => {
        const startA = getEventDate(evtA.start);
        const startB = getEventDate(evtB.start);

        if (startA > startB) {
          return 1;
        } else if (startB > startA) {
          return -1;
        } else {
          return 0;
        }
      })
      .reduce((acc, evt, i) => {
        const startMonth = format(parseEventISODate(evt.start), "MMMM");
        const monthEvents = acc.get(startMonth);
        if (!monthEvents) {
          acc.set(startMonth, [evt]);
        } else {
          acc.set(startMonth, monthEvents.concat(evt));
        }
        return acc;
      }, eventsMap);
  }

  function getEventDate(evt) {
    return evt.dateTime || evt.date;
  }

  function parseEventISODate(evt) {
    return parseISO(getEventDate(evt));
  }

  function displayDay(date) {
    return format(date, "MMMM d, y");
  }

  function displayTime(date) {
    return format(date, "h:mm aaaa");
  }

  function renderEvent({
    summary,
    id,
    location,
    description,
    start,
    end,
    organizer,
  }) {
    const { email: calendarId } = organizer;
    const startDate = parseEventISODate(start);
    const endDate = parseEventISODate(end);
    const startDayStr = format(startDate, "yyyy-MM-dd");
    const isSameDay = startDayStr === format(endDate, "yyyy-MM-dd");
    const displaySpan = isSameDay
      ? `${displayDay(startDate)}, ${displayTime(startDate)} to ${displayTime(
          endDate
        )}`
      : `${displayDay(startDate)}, ${displayTime(startDate)} to ${displayDay(
          endDate
        )}, ${displayTime(endDate)}`;
    return (
      <li key={id}>
        <header>{summary}</header>
        <time dateTime={startDayStr}>{displaySpan}</time>
        {location ? <span>{location}</span> : null}
        {description ? (
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        ) : null}
        {withFooter && calendarId !== CALENDAR_IDS.main ? (
          <footer>{organizer.displayName}</footer>
        ) : null}
      </li>
    );
  }

  function renderEvents() {
    if (hasFetchedEvents) {
      if (!events.size) {
        return <p>There are no upcoming events on the calendar.</p>;
      } else {
        const months = [];
        const eventsByMonth = events.entries();
        for (let i = 0; i < events.size; i++) {
          const [month, evts] = eventsByMonth.next().value;
          months.push(
            <Fragment key={`month-${month}`}>
              <h3 className={Styles.calendarMonth}>{month}</h3>
              <ul className={Styles.calendarEvents}>{evts.map(renderEvent)}</ul>
            </Fragment>
          );
        }
        return months;
      }
    } else {
      return <p>Loading events from calendar...</p>;
    }
  }

  useEffect(() => {
    fetchCalendarEvents();
  });

  return (
    <React.Fragment>
      <Gapi />
      <SEO title={pageTitle || "Calendar"} />
      <section>{renderEvents()}</section>
    </React.Fragment>
  );
};
export default Calendar;
