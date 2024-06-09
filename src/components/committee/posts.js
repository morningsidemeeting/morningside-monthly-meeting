import React from "react";
import { StaticQuery, graphql } from "gatsby";
import CommitteePage from "./index";
import PostList from "../posts";

function CommitteePosts({ data, tag }) {
  const nodes = data.allMdx.nodes.filter((n) =>
    n.frontmatter.tags.includes(tag)
  );

  if (nodes.length) {
    return <PostList nodes={nodes} title="Posts" />;
  } else {
    return <p>No posts found.</p>;
  }
}

export default function CommitteePostsPage({ title, basePath, tag }) {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(
            limit: 100
            sort: { frontmatter: { date: DESC } }
            filter: {
              frontmatter: { tags: { in: "committees", nin: "archived" } }
            }
          ) {
            nodes {
              frontmatter {
                title
                date
                tags
              }
              id
              body
            }
          }
        }
      `}
      render={(data) => (
        <CommitteePage title={title} basePath={basePath}>
          <CommitteePosts data={data} tag={tag} />
        </CommitteePage>
      )}
    />
  );
}
