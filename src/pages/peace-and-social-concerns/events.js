import React from "react";
import CommitteeEvents from "../../components/committee/events";
import { basePath, title, calendarSlug } from "./config.json";

export default function CommitteeEventsPage() {
  return (
    <CommitteeEvents
      calendarSlug={calendarSlug}
      title={title}
      basePath={basePath}
    />
  );
}
