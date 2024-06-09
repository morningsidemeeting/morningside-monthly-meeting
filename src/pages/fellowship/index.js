import React from "react";
import CoreLayout from "../../components/coreLayout";
import Nav from "../../components/nav/about";
import Seo from "../../components/seo";

const FellowshipPage = () => (
  <CoreLayout withSubtitle={false}>
    <Seo title="Quaker Fellowship" />
    <Nav />
    <section>
      <h2>Quaker Fellowship</h2>
      <p>
        There are an estimated 300,000 Quakers worldwide with a diverse range of
        theologies and beliefs, but only one Spirit that moves through all.
        Today, Friends celebrate the diversity of worship among Friends, as no
        theology can contain the Spirit; no faithful worship can be alien to
        God. The range of Friendly persuasions is usually associated with the
        following organizations:
      </p>
      <p>
        <a href="http://www.fgcquaker.org/">Friends General Conference</a>{" "}
        (FGC), to which Morningside belongs, includes about 500 meetings or
        worship groups and has a membership of about 35,000. Most of the
        Meetings are unprogrammed meetings without a pastor or set liturgies
        other than silence.
      </p>
      <p>
        <a href="http://fum.org/">Friends United Meeting</a> (FUM) claims about
        60,000 members in North America and approximately 140,000 worldwide,
        making it the largest of the three major groups. Meetings are often
        called churches, and they generally have a pastor and “programmed”
        worship.
      </p>
      <p>
        <a href="http://www.evangelicalfriends.org/">
          Evangelical Friends International
        </a>{" "}
        (EFI) consists of almost 300 North American Quaker churches with an
        estimated membership of 30,000. Worldwide, EFI membership numbers up to
        100,000. It expresses itself as a community of all who believe in Jesus
        Christ.
      </p>
      <p>
        <a href="http://www.fwccworld.org/">
          Friends World Committee for Consultation
        </a>{" "}
        (FWCC) seeks to forge links among these differing expressions of
        Quakerism.
      </p>
      <p>
        <strong>
          Morningside is a member of a wider network of Friends unprogrammed
          Meetings.
        </strong>
      </p>
      <p>
        <a href="http://www.nyym.org/">New York Yearly Meeting</a> (NYYM) is the
        gathering of Quaker meetings (congregations) in New York State, northern
        New Jersey, and southwestern Connecticut. The website is an excellent
        resource for all things Quaker and specifically things relating to the
        NYYM. The site contains the latest edition of{" "}
        <a href="http://www.nyym.org/?q=faith_and_practice">
          Faith and Practice for New York Yearly Meeting
        </a>
        , a set of guides and queries for Meetings.
      </p>
      <p>
        <a href="https://www.nycquakers.org/">New York Quarterly Meeting</a>{" "}
        (NYQM) is the Quarterly Meeting for the Monthly Meetings in New York
        City, including{" "}
        <a href="http://15stfriends.quaker.org/">Fifteenth St.</a>,{" "}
        <a href="http://www.brooklynmeeting.org/">Brooklyn</a>,
        <a href="http://www.morningsidemeeting.org/">Morningside</a>,{" "}
        <a href="http://www.nyym.org/manhattan/">Manhattan</a> and{" "}
        <a href="http://www.nyym.org/statenisland/">Staten Island</a>. For
        further information about meetings that do not have web sites, visit the{" "}
        <a href="http://www.nyym.org/">New York Yearly Meeting</a> website.
      </p>
    </section>
  </CoreLayout>
);
export default FellowshipPage;
