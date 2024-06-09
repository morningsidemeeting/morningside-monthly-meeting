import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <ul>
        <li>
          During Meeting for Worship at least two caregivers, usually one paid
          and one volunteer, are available to be with children who may attend.
          They will also be available during Meeting for Worship with a Concern
          for Business if requested.{" "}
        </li>
        <li>
          Caregivers and parents work together to consider policies, materials,
          and activities.
        </li>
        <li>
          We seek to offer a place of love, bringing our testimonies to life and
          laughter while allowing each of the children to be themselves, to
          offer a place where everyone there learns through respect, love, and
          fun.
        </li>
      </ul>
    </Committee>
  );
}
