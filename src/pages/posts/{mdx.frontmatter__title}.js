import React from "react";
import CoreLayout from "../../components/coreLayout";
import { graphql } from "gatsby";
import * as Styles from "../../components/posts/posts.module.scss";
import { Post, NewPost } from "../../components/posts";
import BLOG_TAGS from "../../shared/blogTags";

const BlogPost = ({ data, children }) => {
  const { title, date, tags = [] } = data.mdx.frontmatter;
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <div className={Styles.post}>
          <h3>{title}</h3>
          {date ? <time dateTime={date}>{date}</time> : null}
          {children}
          <footer>
            {tags
              .map((t) => BLOG_TAGS[t])
              .filter((n) => !!n)
              .join(", ")}
          </footer>
        </div>
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
