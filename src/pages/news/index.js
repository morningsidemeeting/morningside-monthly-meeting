import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import CoreLayout from "../../components/coreLayout";
// import Posts from "../components/posts";
import { graphql, Link } from "gatsby";
import CallToAction from "../../components/callToAction";
import SEO from "../../components/seo";

const NewsPage = ({ data }) => {
  console.log(data.allMdx.nodes);
  return (
    <CoreLayout withSubtitle={false}>
      <SEO title="News" />
      <section>
        <CallToAction path="/news/share">
          Want to share news on the website? Please fill out our form.
        </CallToAction>
      </section>
      <Fragment>
        {data.allMdx.nodes.map(({ frontmatter, body }) => (
          <div>
            <ReactMarkdown children={body} />
          </div>
        ))}
      </Fragment>
    </CoreLayout>
  );
};

export const query = graphql`
  {
    allMdx(
      limit: 10
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { nin: ["archived", "announcements"] } } }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          date(formatString: "MMMM d, y")
        }
      }
    }
  }
`;

export default NewsPage;
