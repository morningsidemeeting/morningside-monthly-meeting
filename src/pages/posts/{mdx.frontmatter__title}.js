import React from "react";
import CoreLayout from "../../components/coreLayout";
import { graphql } from "gatsby";
import { SinglePost } from "../../components/posts";

const BlogPost = ({ data, children }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <SinglePost {...data.mdx.frontmatter}>{children}</SinglePost>
      </section>
    </CoreLayout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
