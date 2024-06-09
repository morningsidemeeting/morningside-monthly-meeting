import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>Ministry and Counsel</p>
      <ul>
        <li>Is concerned with the pastoral care of the Meeting</li>
        <li>
          Recommends acceptance and release of members, for approval by Business
          Meeting
        </li>
        <li>Oversees marriages</li>
        <li>Appoints clearness committees as needed</li>
        <li>Visits the sick and counsels those in need of pastoral care</li>
        <li>Arranges programs and retreats on Quaker topics</li>
        <li>
          Arranges an audit of the Treasurer’s annual report before the report
          is presented to the March Business Meeting
        </li>
        <li>
          Considers requests for scholarships and travel assistance to Quaker
          events
        </li>
        <li>
          Considers requests for financial assistance from the John Bohne
          Memorial Fund
        </li>
      </ul>
      <p>
        Ministry and Council also helps form spiritual nurture groups. A
        selection of documents related to spiritual nurture groups can be found{" "}
        <Link to={`${basePath}/spiritual-nurture-groups`}>here</Link>.
      </p>
    </Committee>
  );
}
