import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>The Morningside Nominating Committee:</p>
      <ul>
        <li>
          Fills positions and committees in Monthly Meeting by asking people
          what they would like to do, getting suggestions, and searching for
          (possibly hidden) talents.
        </li>

        <li>
          In December, presents nominations for positions and committees to
          Business Meeting, for final approval in January.
        </li>

        <li>Meets as needed, but more frequently in the Fall.</li>

        <li>
          Maintains a list of Morningside's committees and committee members.
        </li>

        <li>
          Members of Nominating Committee who are members of the Society of
          Friends also serve on Quarterly Meeting Nominating Committee, which
          meets about four times per year.
        </li>
      </ul>
      <p>
        Members of the Nominating Committee are themselves nominated by a Naming
        Committee (which is established/confirmed by Ministry and Counsel). The
        naming committee brings names to the business meeting. In January 2021,
        Charlene Ray and Jason McGill were confirmed by Ministry and Counsel as
        a Naming Committee, to be brought to meeting for business for approval.
      </p>
    </Committee>
  );
}
