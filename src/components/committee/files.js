import React from "react";
import CommitteePage from "./index";
import Files from "../files";
import CallToAction from "../callToAction";
import { SHARE_DOCS_FORM_URL } from "../../shared/googleConfig";

export default function CommitteeFilesPage({
  title,
  basePath,
  filesSlug,
  children,
  noCta,
}) {
  function renderFiles() {
    if (filesSlug) {
      return <Files folderIds={[filesSlug]} orderBy="name desc" />;
    } else {
      return null;
    }
  }

  return (
    <CommitteePage title={title} basePath={basePath}>
      {children}
      {noCta === true ? null : (
        <CallToAction path={SHARE_DOCS_FORM_URL}>
          Want to add a document to the website? Please fill out out our form.
        </CallToAction>
      )}
      {renderFiles()}
    </CommitteePage>
  );
}
