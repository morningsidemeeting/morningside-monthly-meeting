import React from "react";
import CoreLayout from "../../components/coreLayout";
import CallToAction from "../../components/callToAction";
import * as Styles from "./contact.module.scss";
import Seo from "../../components/seo";

const AboutPage = () => (
  <CoreLayout withSubtitle={false}>
    <Seo title="Contact" />
    <section className={Styles.contact}>
      <h3>General Information</h3>
      <p>
        For all inquiries, please email our main address:{" "}
        <a href="mailto:morningsidequakermeeting@gmail.com">
          morningsidequakermeeting@gmail.com
        </a>
      </p>

      <p>
        For in-person worship, Morningside Friends meet in the tower of the
        Riverside Church in New York City, which is located on Riverside Drive
        and 120th Street near Columbia University, where Harlem and the Upper
        West Side meet. (120th Street is also named Reinhold Niebuhr Place.)
      </p>

      <p>
        We enter the church at the Claremont Avenue entrance at 91 Claremont
        Ave. From Riverside Drive, where the main entrance to the church is,
        walk one block east on 120 Street and turn left. The Claremont Avenue
        entrance is on the west side of the street.
      </p>
    </section>

    <section className={Styles.contact}>
      <h3>Member and Attender Contacts</h3>

      <p>
        Morningside Monthly Meeting maintains a spreadsheet of contact
        information to help members and attenders communicate with each other.
        If you'd like access to view it online, please fill out and submit the
        form below.
      </p>

      <CallToAction path="/contact/database">
        Add Me to Morningside Meeting Contacts
        <br />
        (or Update My Information)
      </CallToAction>

      <p>
        A standard directory also is available for members and attenders of
        Morningside Meeting to contact each other. If you would like a copy of
        the directory or need to reach another member of the meeting, please
        contact{" "}
        <a href="mailto:morningsidequakermeeting@gmail.com">
          morningsidequakermeeting@gmail.com
        </a>
        .
      </p>
    </section>

    <section className={Styles.contact}>
      <h3>Directions to Riverside Church</h3>

      <p>
        <strong>By Subway</strong>Take the IRT Broadway Local train (#1) to the
        116th Station at 116th Street and Broadway. If you are coming from
        downtown, you can take either the IRT Express train (#2 or #3) and
        change at 96th Street for the uptown Broadway Local #1 train.
      </p>

      <p>
        <strong>By Bus</strong>
        Take the M4 or M104 to 120 Street and Broadway. Take the M5 to Riverside
        Drive and 120th Street. Click here for the Manhattan Bus Map.
      </p>

      <p>
        <strong>By Car</strong>
        Henry Hudson Parkway Northbound—Take the 96th Street Exit to Broadway,
        turn left onto Broadway. Continue North to 120th Street. At 120th, turn
        left. For the 91 Claremont Avenue entrance, continue one block, and turn
        right onto Claremont.
      </p>

      <p>
        Henry Hudson Parkway Southbound—Take the 125th Street Exit. Drive
        straight to 125th Street. Turn left onto 125th Street. Take 125th Street
        to Broadway. (You’ll see the elevated train tracks at Broadway.) Turn
        right onto Broadway and go to 120th Street (Reinhold Niebuhr) and turn
        right. The church is one block west of Broadway.
      </p>

      <p>
        Triborough Bridge to Manhattan—Take the 125th Street Exit. Take 125th
        Street to Broadway. Turn left on Broadway and drive to 120th Street
        (Reinhold Niebuhr). Turn right. The church is one block west of
        Broadway.
      </p>

      <p>
        <strong>Parking</strong>The Riverside Church garage is on 120th Street,
        between Riverside Drive and Claremont Avenue. For a reduced rate, before
        you leave the church, pick up the Riverside Church weekly program at the
        information desk near the Claremont Avenue entrance and show it to the
        parking lot attendant.
      </p>
    </section>
  </CoreLayout>
);
export default AboutPage;
