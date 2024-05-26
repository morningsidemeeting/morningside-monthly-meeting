import React from "react";
import { Link } from "gatsby";
import * as Styles from "./nav.module.scss";

const Nav = ({ links = [], isPrimary }) => {
  return (
    <div className={`${Styles.nav} ${!isPrimary ? Styles.secondary : ""}`}>
      <ul>
        {links.map(([name, path], i) => (
          <li key={`subnav-link-${i}`}>
            <Link to={path} activeClassName={Styles.active}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
