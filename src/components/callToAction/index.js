import React from "react";
import { Link } from "gatsby";
import { cta } from "./callToAction.module.scss";

const CallToAction = ({ path, children }) => {
  return (
    <p className={cta}>
      <Link to={path}>{children}</Link>
    </p>
  );
};

export default CallToAction;
