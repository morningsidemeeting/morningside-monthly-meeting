import React from "react";
import CommitteePosts from "../../components/committee/posts";
import * as Config from "./config.json";
const { basePath, title, postsTag } = Config;

export default function CommitteePostsPage() {
  return <CommitteePosts tag={postsTag} title={title} basePath={basePath} />;
}
