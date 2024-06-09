import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <ul>
        <li>
          Overseeing technology for the Meeting room, including setting up,
          operating, and putting away the equipment each Sunday; and
          coordinating with Riverside when tech challenges arise.
        </li>
        <li>
          Serving as the primary contact for facility issues with Riverside
          Church (currently the Space Committee)
        </li>
        <li>
          And, for the foreseeable future, managing COVID-related logistics,
          including the attendance reservation system, attender/member check-in
          on 12T, maintaining records of sign-up and attendance, bathroom
          monitoring, etc.
        </li>
      </ul>
    </Committee>
  );
}
