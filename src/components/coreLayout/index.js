import React from "react";
import MainNav from "../../components/nav/main";
import SiteFooter from "../../components/siteFooter";
import { Link } from "gatsby";
import * as Styles from "./coreLayout.module.scss";
import Analytics from "../analytics";

export default function CoreLayout({
  withSubtitle = false,
  withNav = true,
  children,
}) {
  return (
    <div className={Styles.container}>
      <h1>
        <Link to="/">Morningside Quaker Meeting</Link>
      </h1>
      {withNav ? <MainNav /> : null}
      {withSubtitle ? (
        <h2>
          Morningside Monthly Meeting
          <br />
          of the Religious Society of Friends
        </h2>
      ) : null}
      <main>{children}</main>
      <SiteFooter />
      <Analytics />
    </div>
  );
}
