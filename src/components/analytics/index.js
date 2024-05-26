import React from "react";
import { Helmet } from "react-helmet";

function Analytics() {
  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EX3R8NW7H7"
      ></script>
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-EX3R8NW7H7');
      `}
      </script>
    </Helmet>
  );
}

export default Analytics;
