import React from "react";
import CommitteePage from "./index";
import Calendar from "../calendar";

export default function CommitteeEventsPage({ title, basePath, calendarSlug }) {
  function renderEvents() {
    if (calendarSlug) {
      return <Calendar calendarIds={[calendarSlug]} withFooter={false} />;
    } else {
      return null;
    }
  }

  return (
    <CommitteePage title={title} basePath={basePath}>
      {renderEvents()}
    </CommitteePage>
  );
}
