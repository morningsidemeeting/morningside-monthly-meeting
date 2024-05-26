import React from "react";
import CoreLayout from "../coreLayout";
import Nav from "../nav";
import SEO from "../seo";

export default function CommitteePage({ title, basePath, children }) {
  const links = [
    ["About", basePath],
    ["Posts", `${basePath}/posts`],
    ["Events", `${basePath}/events`],
    ["Documents", `${basePath}/documents`],
  ];

  return (
    <CoreLayout withSubtitle={false}>
      <h2>{title}</h2>
      <Nav links={links} />
      <section>{children}</section>
      <SEO title={title} />
    </CoreLayout>
  );
}
