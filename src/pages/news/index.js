import React, { Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import PostList from "../../components/posts";
import { graphql } from "gatsby";
import CallToAction from "../../components/callToAction";
import Seo from "../../components/seo";

const NewsPage = ({ data }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <Seo title="News" />
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
      filter: {
        frontmatter: {
          tags: { nin: ["archived", "announcements", "announcement"] }
        }
      }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          date(formatString: "MMMM D, y")
        }
      }
    }
  }
`;

export default NewsPage;
