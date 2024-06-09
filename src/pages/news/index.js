import React, { Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import PostList from "../../components/posts";
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
        <Fragment>
          <PostList nodes={data.allMdx.nodes} />
        </Fragment>
      </section>
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
