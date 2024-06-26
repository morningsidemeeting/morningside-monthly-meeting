import React from "react";
import slugify from "@sindresorhus/slugify";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import * as Styles from "./posts.module.scss";
import BLOG_TAGS from "../../shared/blogTags";

export const SinglePost = (props) => {
  const { title, date, tags, body, id, children, linkTitle = false } = props;
  return (
    <div className={Styles.post} key={`post-${id}`}>
      {title ? (
        <h3>
          {linkTitle ? <a href={`/posts/${slugify(title)}`}>{title}</a> : title}
        </h3>
      ) : null}
      {date ? <time dateTime={date}>{date}</time> : null}
      {children ? (
        children
      ) : (
        <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      )}
      <footer>
        {tags
          .map((t) => BLOG_TAGS[t])
          .filter((n) => !!n)
          .join(", ")}
      </footer>
    </div>
  );
};

const PostList = ({ nodes }) => {
  return nodes.map((data) => {
    const { id, body, frontmatter } = data;
    const { title, date, tags = [] } = frontmatter;
    const props = { title, date, tags, body, id, linkTitle: true };
    return <SinglePost {...props} />;
  });
};

export default PostList;
