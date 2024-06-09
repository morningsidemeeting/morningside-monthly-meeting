import React from "react";
import FilesPage from "../../components/files/filesPage";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(match, p1, p2) {
  return `${months[parseInt(p2) - 1]}, 20${p1}`;
}

function formatFileName(name) {
  return name.replace(/(\d{2})(\d{2}).pdf$/, formatDate);
}

export default function NewslettersPage() {
  return (
    <FilesPage
      folderSlug="newsletters"
      formatFileName={formatFileName}
      pageTitle="Newsletters"
    >
      <section>
        <h3>Newsletter Submission Guidelines</h3>
        <p>
          The purpose of the newsletter is to inform members, attenders and
          other interested people of Meeting news, including member interviews,
          news of Friends, other Quaker-related subjects, news of Quaker
          organizations, upcoming events, Meeting-sponsored projects, book
          reviews, etc. Articles and pictures are welcome. The deadline for the
          newsletter is the Sunday of the Meeting for Worship with a Concern for
          Business. Please e-mail your material in Word or text format to{" "}
          <a href="mailto:morningsidequakermeeting@gmail.com">
            morningsidequakermeeting@gmail.com
          </a>{" "}
          by the end of that day.
        </p>
      </section>
    </FilesPage>
  );
}
