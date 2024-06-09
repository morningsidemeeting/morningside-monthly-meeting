import React from "react";
import CommitteeFiles from "../../components/committee/files";
import { basePath, title, filesSlug } from "./config.json";

export default function CommitteeFilesPage() {
  return (
    <CommitteeFiles filesSlug={filesSlug} title={title} basePath={basePath} />
  );
}
