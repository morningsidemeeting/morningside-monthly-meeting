import React from "react";
import Nav from "./index";

const links = [
  ["Newsletters", "/newsletters"],
  ["Business Minutes", "/business-minutes"],
  ["State of the Meeting", "/state-of-the-meeting"],
  ["Memorial Minutes", "/memorial-minutes"],
];

const DocsNav = () => <Nav links={links} />;

export default DocsNav;
