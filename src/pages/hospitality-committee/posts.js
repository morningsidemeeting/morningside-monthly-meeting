import React from "react";
import CommitteePosts from "../../components/committee/posts";
import { basePath, title, postsTag } from "./config.json";

export default function CommitteePostsPage() {
  return <CommitteePosts tag={postsTag} title={title} basePath={basePath} />;
}
