import React from "react";
import Nav from "./index";

const links = [
  ["Meeting for Worship", "/worship"],
  ["Faith", "/faith"],
  ["Practice", "/practice"],
];

const AboutNav = () => <Nav links={links} />;

export default AboutNav;
