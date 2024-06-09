import React from "react";
import CoreLayout from "../../components/coreLayout";
import Nav from "../../components/nav/about";
import Seo from "../../components/seo";

const BusinessPage = () => (
  <CoreLayout withSubtitle={false}>
    <Seo title="Meeting for Worship with a Concern for Business" />
    <Nav />
    <section>
      <h2>Meeting for Worship with a Concern for Business</h2>
      <p>
        Unlike Meeting for Worship, which is held weekly, Meeting for Business
        takes place only once a month, on the first Sunday of every month, or
        the nearest time to it. During that time, the Meeting takes care of its
        business—from hearing and acting on committee reports to the acceptance
        of new members.
      </p>

      <p>
        Morningside refers to Meeting for Business as Meeting for Worship with a
        Concern for Business. The name emphasizes the true nature of any
        Meeting: worship. On the one hand, meeting implies a secular transaction
        that is best emphasized in the original Greek assembly, later used for
        church: ἐκκλησία. On the other hand, Meeting is used by Friends to
        designate the weekly silent worship that is at the heart of Quakerism.
      </p>

      <p>
        Like Meeting for Worship, Meeting for Business arises out of the
        silence. Friends believe that all have access to the Teacher within, and
        if we proceed in worshipful attention, the Spirit will lead us to the
        correct decision. As we trust that the Spirit does not breed contention,
        we can proceed in our business without the aid of a majority opinion.
        Friends discuss business as it arises, but the business never comes to a
        vote. This does not imply that all decisions must be unanimous, for that
        would require shutting down all dissenting voices and the voice of the
        Spirit within all.
      </p>

      <p>
        Instead we seek a decision that we hope is in agreement with the
        leadings of the Spirit and that will, therefore, strengthen the entire
        community.{" "}
      </p>

      <p>
        Monthly Meetings meet for Business once a month. Quarterly Meeting
        (which includes the Monthly Meetings in the Metropolitan area) meet
        every Quarter. New York Yearly Meeting (which includes Meetings in New
        York State, northern New Jersey, and southwestern Connecticut) meets
        once a year.{" "}
      </p>
    </section>
  </CoreLayout>
);
export default BusinessPage;
