import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <ul>
        <li>
          Recruits volunteers to prepare simple refreshments for after Meeting,
          and forwards list of volunteers to Newsletter Committee
        </li>
        <li>Keeps track of and replenishes general supplies such as cups</li>
        <li>Greets newcomers and visitors to the Meeting</li>
        <li>
          Prepares special literature for an Inquirers’ table and speaks with
          visitors to the table after Meeting for Worship
        </li>
      </ul>
    </Committee>
  );
}
