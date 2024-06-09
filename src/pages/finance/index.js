import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <ul>
        <li>
          Raises money for the Monthly Meeting through letters of appeal and
          other methods{" "}
        </li>
        <li>
          Solicits proposed expenditures from the various committees of the
          Meeting and proposes a budget to the December Business Meeting for
          final approval in January{" "}
        </li>
        <li>
          Attends the General Services Meeting of the New York Yearly Meeting to
          discuss the Yearly Meeting budget and allocation{" "}
        </li>
        <li>Meets as needed, usually about three times each year</li>
      </ul>
    </Committee>
  );
}
