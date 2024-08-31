import React from "react";
import CommitteeEvents from "../../components/committee/events";
import * as Config from "./config.json";
const { basePath, title, calendarSlug } = Config;

export default function CommitteeEventsPage() {
  return (
    <CommitteeEvents
      calendarSlug={calendarSlug}
      title={title}
      basePath={basePath}
    />
  );
}
