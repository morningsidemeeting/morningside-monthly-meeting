import React from "react";
import CommitteeFiles from "../../components/committee/files";
import { basePath, title, sngFilesSlug } from "./config.json";

export default function CommitteeFilesPage() {
  return (
    <CommitteeFiles
      filesSlug={sngFilesSlug}
      title={title}
      basePath={basePath}
      noCta={true}
    >
      <p>
        A spiritual nurture group allows people to come together periodically,
        usually once a month, to explore their spiritual journeys through a
        variety of means: readings, activities, worship, worship sharing and
        retreats.
      </p>
      <p>
        Below is a selection of documents related to the functioning of
        spiritual nurture groups and topics related to them.
      </p>
    </CommitteeFiles>
  );
}
