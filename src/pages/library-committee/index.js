import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>
        Morningside Monthly Meeting maintains a library containing books,
        pamplets, and other media of interest to Quakers. It is open to all
        attenders before and after meeting for worship, and anyone may borrow by
        simply leaving their contact information.
      </p>
      <p>
        You can <Link to="/library">search our library catalog</Link> on this
        website.
      </p>
      <p>The Library Committee</p>
      <ul>
        <li>Maintains library and coordinates lending of books</li>
        <li>
          Coordinates the selection and purchase of books with New York Yearly
          Meeting’s annual $50 contribution from the Mosher Fund
        </li>
      </ul>
    </Committee>
  );
}
