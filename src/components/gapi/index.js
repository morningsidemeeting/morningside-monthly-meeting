import React from "react";
import { Helmet } from "react-helmet";
import {
  API_KEY,
  CLIENT_ID,
  SCOPES,
  DISCOVERY_DOCS,
} from "../../shared/googleConfig";

function getGapi() {
  return new Promise((resolve, reject) => {
    let sanity = 0;
    waitForGapi();

    function waitForGapi() {
      sanity++;
      if (typeof window === "undefined" || typeof window.gapi == "undefined") {
        if (sanity > 10) {
          reject("Could not find gapi");
        } else {
          setTimeout(waitForGapi, 1000);
        }
      } else {
        resolve(window.gapi);
      }
    }
  });
}

export async function loadAndInitGapi() {
  return new Promise(async (resolve, reject) => {
    const gapi = await getGapi();
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: DISCOVERY_DOCS,
        })
        .then(
          () => resolve(gapi.client),
          (error) => reject(error)
        );
    });
  });
}

const Gapi = () => {
  return (
    <Helmet>
      <script async defer src="https://apis.google.com/js/api.js"></script>
    </Helmet>
  );
};

export default Gapi;
