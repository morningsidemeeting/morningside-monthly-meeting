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
  return name.replace(/(\d{2})-(\d{2}).pdf$/, formatDate);
}

export default function BusinessMinutesPage() {
  return (
    <FilesPage
      folderSlug="business_minutes"
      formatFileName={formatFileName}
      pageTitle="Business Minutes"
    />
  );
}
