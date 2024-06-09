import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>
        The committee is first and foremost focused on helping Morningside
        members and attenders and distant Friends maintain a sense of community
        via email, newsletters, the site, mailings, and other forms of
        communication.
      </p>

      <p>
        We meet on a regular basis to ensure that we’re helping Morningsiders
        with their communication needs, whether it involves writing monthly
        newsletters to assisting with a zoom meeting set-up.
      </p>

      <p>
        We maintain an up-to-date roster of all members &amp; attenders with the
        help and guidance of Ministry &amp; Counsel. That roster is shared with
        the meeting on a yearly basis via email and mail delivery.
      </p>

      <p>
        We regularly review the website and other digital means of communication
        so that those avenues are delivering important information to Friends
        within the meeting.
      </p>

      <p>
        We help the clerk, other committees, and individual Friends with their
        communication needs, such as assisting with zoom meeting scheduling,
        sending out emails, etc.
      </p>

      <p>
        We keep our focus on delivering important information about the meeting
        and Quakerism so that the Meeting maintains its spiritual life.
      </p>

      <p>
        We manage the meeting’s social media platforms such as Facebook,
        Instagram, Twitter, making sure that they reflect our Quaker values and
        testimonies.
      </p>

      <p>
        We listen to Friends and help them find ways of promoting messages
        important to Quakers.
      </p>
    </Committee>
  );
}
