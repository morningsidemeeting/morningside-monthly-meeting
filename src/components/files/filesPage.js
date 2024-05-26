import React from "react";
import CoreLayout from "../coreLayout";
import Nav from "../nav/docs";
import Files from "../files";
import CallToAction from "../callToAction";
import { SHARE_DOCS_FORM_URL } from "../../shared/googleConfig";
import SEO from "../seo";

const FilesPage = ({ folderSlug, formatFileName, children, pageTitle }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <Nav />
      <SEO title={pageTitle || "Documents"} />
      <section>
        <CallToAction path={SHARE_DOCS_FORM_URL}>
          Want to add a document to the website? Please fill out out our form.
        </CallToAction>
      </section>
      {children}
      <Files
        folderIds={[folderSlug]}
        orderBy="name desc"
        formatFileName={formatFileName}
      />
    </CoreLayout>
  );
};
export default FilesPage;
