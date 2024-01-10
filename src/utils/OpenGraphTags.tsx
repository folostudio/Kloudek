import React from "react";

const OpenGraphTags: React.FC = () => {
  return (
    <React.Fragment>
      <meta
        property="og:url"
        content="https://kloudek.com/"
      />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kloudek nội thất" />
      <meta
        property="og:description"
        content="Kloudek bán nội thất, cho thuê"
      />
      <meta property="og:image" content="/logoKloudek.png" />
    </React.Fragment>
  );
};

export default OpenGraphTags;
