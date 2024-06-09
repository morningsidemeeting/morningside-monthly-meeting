import React from "react";
import CoreLayout from "../../components/coreLayout";
import Nav from "../../components/nav/about";
import Seo from "../../components/seo";

const AboutPage = () => (
  <CoreLayout withSubtitle={false}>
    <Seo title="About Morningside Meeting" />
    <Nav />
    <section>
      <h2>A Brief History of Morningside Monthly Meeting</h2>
      <p>
        From our origins as an informal worship group meeting on the campus of
        Columbia University in the winter of 1957-58, Morningside grew into a
        preparatory meeting under the care of New York Quarterly Meeting (1960),
        then blossomed into a monthly meeting in 1973, and finally became fully
        self-supporting in 1990. In July of 2002, we moved from the Columbia
        campus to the tower of Riverside Church, and have been “permanently” at
        home on the twelfth floor since 2007. For most of our history, we have
        maintained a fairly constant number of members (55-60).
      </p>
      <p>
        Unencumbered by the need to attend to the upkeep of a physical home, we
        are free to devote our resources to outreach, and to concerns for peace
        and social justice. A significant portion of our annual budget is
        distributed, via our Peace and Social Concerns Committee, to a variety
        of organizations who work to improve the quality of life of those whom
        they serve. We tend to focus on small organizations, for whom our modest
        contributions will make a noticeable difference, and on organizations
        that serve the local community, regardless of their religious
        affiliation.
      </p>
      <p>
        Our lack of a Meetinghouse has presented particular challenges as we
        have labored together to create a loving community. We have met those
        challenges by establishing spiritual nurture groups, conducting mid-week
        meetings in each others’ homes, holding periodic retreats, and forming
        discussion groups on a wide variety of topics.
      </p>
      <p>
        Morningside was one of the first meetings in North America to take a
        same-sex marriage under its care with the marriage of John Bohne and
        William McCann on May 30, 1987. Morningside was also the first to affirm
        the right of all couples to name their relationships as they choose.
      </p>
      <p>
        Support committees for those among us who are facing personal
        difficulties – or are embarking on new personal, professional, or
        spiritual journeys – are regularly established by our Committee on
        Ministry and Counsel.
      </p>
      <p>
        While attendance at our First Day School has fluctuated over the years,
        we are always prepared to welcome children, and work together to find
        ways to introduce them to a life lived in the Light, in accordance with
        the Quaker testimonies of equality, simplicity, integrity, and peace.
      </p>
    </section>
  </CoreLayout>
);
export default AboutPage;
