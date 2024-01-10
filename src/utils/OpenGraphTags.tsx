import React from "react";

const OpenGraphTags: React.FC = () => {
  return (
    <React.Fragment>
      <meta
        property="og:url"
        content="https://folostudio.com/"
      />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FoloStudio Thiết kế website" />
      <meta
        property="og:description"
        content="FoloStudio chuyên thiết kế website bán hàng, Blog, Portfolio. thiết kế website bằng công nghệ hiện đại Nextjs"
      />
      <meta property="og:image" content="/assets/images/landing/FoloStudio.png" />
    </React.Fragment>
  );
};

export default OpenGraphTags;
