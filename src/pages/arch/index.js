import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>
        <a href="https://www.nyym.org/content/arch">ARCH</a> (Aging Resources
        Consultation and Help) is a program of the New York Yearly Meeting. ARCH
        visitors are trained to help Friends deal with aging or
        disability-related concerns.
      </p>
      <p>
        At Morningside Meeting, ARCH is a committee of the whole. Charlene Ray
        is the convenor.
      </p>
    </Committee>
  );
}
