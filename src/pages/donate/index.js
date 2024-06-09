import React from "react";
import CoreLayout from "../../components/coreLayout";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { qrCode } from "../../components/coreLayout/coreLayout.module.scss";

const DonatePage = ({ data }) => (
  <CoreLayout withSubtitle={false}>
    <Seo title="Donate to Morningside Meeting" />
    <section>
      <h2>Support Morningside Meeting</h2>
      <p>
        Morningside gratefully accepts donations to support its work,
        activities, and worship.
      </p>
      <p>
        You can make a one-time or recurring donation online by either clicking
        on the Donate button or scanning the QR code below.
      </p>
      <p>If you prefer to donate with a check, please send it to:</p>
      <p>
        Morningside Meeting
        <br />℅ NY Quarterly Meeting
        <br />
        15 Rutherford Place
        <br />
        New York, NY 10003
      </p>
    </section>
    <section>
      <h3>Donate Online</h3>
      <p>
        <em>
          Please note that clicking on the Donate button will redirect you to
          our form on PayPal; a PayPal account is <strong>not</strong> required
          to donate, however.
        </em>
      </p>
      <div className="donate-container">
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="JBTCB4CK6XT7Y" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
            style={{ marginBottom: "20px" }}
          />

          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
      <StaticImage
        src="../../images/paypal-qr-code.png"
        layout="fixed"
        width={150}
        height={150}
        className={qrCode}
      />
    </section>
  </CoreLayout>
);

export default DonatePage;
