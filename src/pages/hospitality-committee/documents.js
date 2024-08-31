import React from "react";
import CommitteeFiles from "../../components/committee/files";
import * as Config from "./config.json";
const { filesSlug, title, basePath } = Config;

export default function CommitteeFilesPage() {
  return (
    <CommitteeFiles filesSlug={filesSlug} title={title} basePath={basePath} />
  );
}
