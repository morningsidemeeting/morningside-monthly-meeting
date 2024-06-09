import React from "react";
import Committee from "../../components/committee";

import { basePath, title } from "./config.json";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>
        According to <em>Faith and Practice</em>, a committee is a group of
        individuals who meet under appointment and out of a calling or concern
        with the responsibility for being particularly aware of some aspect of
        the life of the meeting. One of the ways Morningside Monthly Meeting
        participates in the work of the Spirit in the world is through the Peace
        and Social Concerns Committee.
      </p>
      <p>
        The function of the Committee is to engage with the Meeting in
        understanding and implementing Friends’ testimonies and principles as
        they bear upon public issues. While this function includes overseeing
        the Meeting’s relationship with national and international Quaker
        organizations concerned with these matters, most of the Committee’s work
        derives from the passions and concerns—the leadings—of individual
        Morningside members and attenders, who bring these to the Committee for
        discernment. To facilitate this, all meetings of the Committee are open
        to all.
      </p>
      <p>
        After discernment on an issue, the Committee may bring information and
        recommendations for action to the Meeting. The committee also considers
        concerns that arise from Meeting for Worship with a Concern for
        Business. It may, with the Meeting’s approval, act in the name of the
        Meeting on specific matters. The committee may assign areas of concern
        to subcommittees, which may be formed or laid down as appropriate.
      </p>
      <p>
        The Meeting assigns a substantial portion of our annual budget to
        support local hands-on organizations, the wider Quaker fellowship,
        national/international political/social action groups, and special
        projects identified as concerns of the Meeting. Discernment as to the
        assignment and distribution of these funds is part of the work of the
        Peace and Social Concerns Committee.
      </p>
      <p>
        Any Morningside member or attender can bring a concern to the committee
        for consideration for support. The discernment of proposals for funding
        through our budget of projects in any category involves one or more of
        the following four criteria:
      </p>
      <ol type="a">
        <li>
          Active Morningside members and attenders are directly involved.{" "}
        </li>
        <li>The contribution represents seed money for a new endeavor.</li>
        <li>
          The contribution will provide critical funds for the activity—will
          make a difference.
        </li>
        <li>
          Political/social action groups we support are those of which we have
          direct knowledge.
        </li>
      </ol>
      <p>
        As a rule, Friends who bring forward a concern that is approved for
        support become the Meeting’s liaison with the organization carrying out
        the work. Liaisons are responsible for maintaining contact with the
        organization, keeping the Committee and the Meeting as a whole informed
        about its activities, and, not least, informing their contact(s) at the
        organization when funds from Morningside are being sent. While most
        liaisons are members of the standing P&amp;SC Committee, they need not
        be.
      </p>
    </Committee>
  );
}
