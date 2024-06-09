import React from "react";
import CoreLayout from "../../components/coreLayout";
import { SHARE_POSTS_FORM_EMBEDDED_URL } from "../../shared/googleConfig";

export default function SharePage() {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <iframe
          src={SHARE_POSTS_FORM_EMBEDDED_URL}
          width="640"
          height="1700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Share News Form"
          style={{ margin: "0 auto", width: "640px", display: "block" }}
        >
          Loading…
        </iframe>
      </section>
    </CoreLayout>
  );
}
