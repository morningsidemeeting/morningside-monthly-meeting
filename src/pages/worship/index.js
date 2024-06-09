import React from "react";
import CoreLayout from "../../components/coreLayout";
import Nav from "../../components/nav/about";
import Seo from "../../components/seo";

const WorshipPage = () => (
  <CoreLayout withSubtitle={false}>
    <Seo title="Meeting for Worship" />
    <Nav />
    <section>
      <h2>Weekly Meeting for Worship</h2>
      <p>
        Traditionally, we have gathered for worship each First Day (Sunday) at
        11:00am in Riverside Church in New York City. In March 2020, meeting for
        worship was moved entirely online in response to the COVID-19 pandemic.
        Today, Friends and attenders meet for in-person worship on the 12th
        floor of the tower of Riverside Church, where we join in blended worship
        with those attending online.
      </p>
      <p>Our weekly worship adheres to the following pattern:</p>
      <h3>Worship</h3>
      <p>
        Unprogrammed Quaker worship follows from our belief that each of us is
        capable of a direct, unmediated experience of the Eternal Presence. It
        is characterized by a deep and expectant silence, during which each
        worshiper aims to free her/himself from the distractions of daily life.
        This “centering down” allows us to be more fully alive to the Spirit.
        Occasionally, out of this silence, one or more individuals may be led to
        rise and share a message discerned to be intended for all those
        gathered. Messages that do arise are not intended to provoke discussion,
        but further inward reflection. Hence, it is our custom to follow each
        message with a period of silence.
      </p>
      <p>
        Traditionally, meeting for worship begins when the first worshiper
        enters the room and begins to settle into the Silence; its conclusion is
        signaled by a handshake initiated by the meeting coordinator. As a
        blended meeting, those attending online begin to sign in at 10:45 a.m.,
        as those attending in person begin to gather. At 11 a.m., all are
        welcomed into silent worship by a Friend serving as host for that day;
        the meeting for worship concludes with a brief announcement by the host.
      </p>
      <h3>Afterwords</h3>
      <p>
        Worship continues with a period called Afterwords, which provides an
        opportunity for us to build community by sharing messages of a more
        personal nature: joys, sorrows, and brief reflections that did not rise
        to the level of being shared during the main portion of worship. We ask
        that messages be kept brief, and that a worshipful atmosphere be
        maintained by allowing silence between messages, rather than lapsing
        into conversation.
      </p>
      <h3>Introductions</h3>
      <p>
        Following Afterwords, the meeting host will invite members of the
        Morningside Ministry and Counsel Committee who are present to introduce
        themselves. As members of the committee charged with the pastoral care
        of the meeting, they welcome your questions about Quakerism in general
        and Morningside in particular.
      </p>
      <p>
        At this point, visitors, newcomers, and those who are returning after a
        prolonged absence will be invited to introduce themselves, in order that
        they may be greeted more fully during the following time of fellowship.
      </p>
      <h3>Announcements</h3>
      <p>
        Friends are invited to make announcements about events of interest to
        the community
      </p>
      <h3>Fellowship</h3>
      <p>
        Traditionally, all have been welcome to share refreshments and
        conversation following worship. During the time of pandemic, fellowship
        may take place as Friends and attenders remain in the online worship
        room, or as we adjourn to breakout rooms for conversation in small
        groups.
      </p>
    </section>
  </CoreLayout>
);
export default WorshipPage;
