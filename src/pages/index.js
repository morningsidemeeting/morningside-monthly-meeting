import React from "react";
import CoreLayout from "../components/coreLayout";
import Posts from "../components/posts";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { columnImage } from "../components/coreLayout/coreLayout.module.scss";
import CallToAction from "../components/callToAction";
import SEO from "../components/seo";

const HomePage = ({ data }) => {
  const announcements = data.allMdx.nodes;
  const currentAnnouncement = announcements[0];
  return (
    <CoreLayout withSubtitle={true}>
      <SEO title="Home" />
      <section>
        <p>
          Morningside Monthly Meeting of the Religious Society of Friends,
          formed in 1973, is a welcoming, diverse community of individuals
          living the Quaker testimonies of equality, integrity, simplicity,
          stewardship of the earth, and peace.
        </p>

        <p>
          We gather for <Link to="worship">silent worship</Link> every First Day
          (Sunday) morning at 11 o’clock. Traditionally, we meet at Riverside
          Church in Manhattan. Currently we hold hybrid meetings, with some
          members attending via Zoom and others gathering together and
          connecting from Riverside. All are welcome.
        </p>

        {currentAnnouncement ? (
          <CallToAction path={currentAnnouncement.slug}>
            Click here for{" "}
            <strong>{currentAnnouncement.frontmatter.title}</strong> or scroll
            to the bottom of this page.
          </CallToAction>
        ) : null}
        <StaticImage
          src="../images/ny_riverside_church.jpg"
          className={columnImage}
        />
        <hr />
        <Posts nodes={announcements} />
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  {
    allMdx(
      limit: 1
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: "announcements" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM d, y")
        }
      }
    }
  }
`;

export default HomePage;
