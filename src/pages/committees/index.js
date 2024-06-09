import React, { Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import * as Styles from "./committees.module.scss";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

const committeeLinks = {
  "Peace and Social Concerns": "/peace-and-social-concerns",
  "Communications and Website": "/communications",
  Finance: "/finance",
  Nominating: "/nominating",
  "Ministry and Counsel": "/ministry-and-counsel",
  Library: "/library-committee",
  "Friends’ Committee on Unity with Nature (Friends Earthcare Witness)":
    "/nature-committee",
  "Caregivers for Meeting with Children": "/first-day-caregivers",
  Hospitality: "/hospitality-committee",
  "ARCH representative": "/arch",
  "Riverside Space": "/riverside-space-committee",
  "Prison Ministry": "/prison-committee",
};

const CommitteesPage = ({ data }) => {
  function renderCommitteeMembersGrid() {
    const allMembers = data.allCommitteeMembersCsv.edges.map(
      ({ node }) => node
    );
    const nonCommitteePositions = [];
    const membersByCommittee = {};
    allMembers.forEach(({ Committee, Position, Member }) => {
      if (Committee) {
        if (!membersByCommittee[Committee]) {
          membersByCommittee[Committee] = [];
        }
        membersByCommittee[Committee].push(
          Position ? `${Member} (${Position})` : Member
        );
      } else {
        nonCommitteePositions.push([Position, Member]);
      }
    });
    const alphaCommittees = Object.keys(membersByCommittee).sort(
      (aName, bName) => {
        if (aName > bName) {
          return 1;
        } else if (aName < bName) {
          return -1;
        } else {
          return 0;
        }
      }
    );
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th colSpan={2} className={Styles.ncp}>
                Non-Committee Positions
              </th>
            </tr>
          </thead>
          <tbody>
            {nonCommitteePositions.map(([Position, Member], i) => {
              return (
                <tr key={`ncps-${i}`}>
                  <td className={Styles.cmte}>{Position}</td>
                  <td>{Member}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th className={Styles.cmte}>Committee</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {alphaCommittees.reduce((acc, name, i) => {
              membersByCommittee[name].forEach((member, j) => {
                let row;
                const key = `cms-${i}-${j}`;
                if (j == 0) {
                  row = (
                    <tr key={key} className={Styles.cmte}>
                      <td
                        className={Styles.cmte}
                        rowSpan={membersByCommittee[name].length}
                      >
                        {committeeLinks[name] ? (
                          <Link to={committeeLinks[name]}>{name}</Link>
                        ) : (
                          <span>{name}</span>
                        )}
                      </td>
                      <td>{member}</td>
                    </tr>
                  );
                } else {
                  row = (
                    <tr key={key}>
                      <td>{member}</td>
                    </tr>
                  );
                }
                acc.push(row);
              });

              return acc;
            }, [])}
          </tbody>
        </table>
      </Fragment>
    );
  }

  return (
    <CoreLayout withSubtitle={false}>
      <SEO title="Committees" />
      <section>
        <p>
          As Friends do not have a traditional minister and staff, Meeting acts
          through its committees. From a Business Meeting of the whole to a
          Relief Committee with three members, activities in Quakerism are
          accomplished through Committees.
        </p>

        <p>
          Committees have either a clerk for a long standing committee such as
          Ministry and Counsel or a convener for a short-term committee such as
          a Clearness Committee. Like all Quaker activities, committees begin
          and end in silent worship and members await the leading of the Spirit
          in the transaction of business. Committees are therefore forms of
          worship that are Spirit-led.
        </p>

        <p>
          In order to ensure shared decision-making, the clerk and other members
          of committees serve only for a specified length of time. All Meeting
          members and attenders may be asked to sit on committees, depending
          upon their leadings and the discernment of their gifts by the
          Nominating Committee.
        </p>

        <p>
          Anyone with a leading for service to the community should contact the
          clerk of nominating or any member of the nominating committee to make
          that leading known.
        </p>

        <p>
          All positions are for one year, renewable except for the nominating
          committee terms which are for two years, staggered terms, renewable
          once, and ministry &amp; counsel terms for 3 years, renewable once,
          staggered terms.
        </p>
        {renderCommitteeMembersGrid()}
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  query CommitteeMembers {
    allCommitteeMembersCsv {
      edges {
        node {
          id
          Committee
          Position
          Member
        }
      }
    }
  }
`;

export default CommitteesPage;
