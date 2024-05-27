import React, { Fragment } from "react";
// import { Link } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as Styles from "./posts.module.scss";
import BLOG_TAGS from "../../shared/blogTags";

export const Post = (
  { frontmatter = {}, body = "", linkTitle = true, withTags },
  children
) => {
  const { title = "untitled", tags = [], date, slug } = frontmatter;
  // const footer = withTags ? (
  //   <footer>
  //     {tags
  //       .map((t) => BLOG_TAGS[t])
  //       .filter((n) => !!n)
  //       .join(", ")}
  //   </footer>
  // ) : null;
  let parsedDate = date;
  try {
    // if it looks like a time was not specified, shift from GMT to EST
    const ESTDate = date.replace("T00:00:00.000Z", "T05:00:00.000Z");
    parsedDate = format(parseISO(ESTDate), "MMMM d, y");
  } catch (e) {
    // there is either NO date, or date is already a formatted string.
  }
  return (
    <div className={Styles.post}>
      {title ? <h3>{linkTitle ? <a href={slug}>{title}</a> : title}</h3> : null}
      {date ? <time dateTime={date}>{date}</time> : null}
      {body}
    </div>
    // <div className={Styles.post}>
    //   {title ? <h3>{linkTitle ? <a href={slug}>{title}</a> : title}</h3> : null}
    //   {parsedDate ? <time dateTime={date}>{parsedDate}</time> : null}
    //   <MDXRenderer>{body}</MDXRenderer>
    //   {footer}
    // </div>
  );
};

const Posts = ({ nodes = [], withTags = false }) => (
  <Fragment>
    {nodes.map((props) => (
      <Post key={props.id} {...Object.assign({}, props, { withTags })} />
    ))}
  </Fragment>
);

export default Posts;
