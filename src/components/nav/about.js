import React from "react";
import Nav from "./index";

const links = [
  ["Morningside", "/about"],
  ["Quakers", "/quakers"],
  ["Worship", "/worship"],
  ["Business", "/business"],
  ["Fellowship", "/fellowship"],
  ["Library", "/library"],
];

const AboutNav = () => <Nav links={links} />;

export default AboutNav;
