import { FC } from "react";
import Head from "next/head";

// ====================================================================
type SEOProps = {
  title: string;
  sitename?: string;
  description?: string;
};
// ====================================================================

const SEO: FC<SEOProps> = ({
  title,
  description,
  sitename = "Kloudek",
}) => {
  return (
    <Head>
      <title>{`${sitename} | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="thiết kế website, FoloStudio, folostudio, Folo Studio, website, portfolio, blog, web bán hàng" />
    </Head>
  );
};

export default SEO;
