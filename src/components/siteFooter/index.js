import React, { useState } from "react";
import * as Styles from "./siteFooter.module.scss";
import QUOTES from "../../shared/quotes";

export default function SiteFooter() {
  // We'll randomly select a quote from our list to use for the duration of
  // this instance's life:
  const [footerQuote] = useState(
    QUOTES[Math.floor(Math.random() * QUOTES.length)]
  );
  const { quote, author, work, date } = footerQuote;
  return (
    <footer className={Styles.siteFooter}>
      <hr />
      <figure className={Styles.footerQuote}>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        <figcaption>
          {[author, work, date].filter((s) => s).join(", ")}
        </figcaption>
      </figure>
      <p className={Styles.copyright}>
        © 2024 Morningside Monthly Meeting, Religious Society of Friends.
      </p>
    </footer>
  );
}
