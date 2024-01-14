import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import Script from "next/script";
import createEmotionServer from "@emotion/server/create-instance";
import { AppType } from "next/app";
import { MyAppProps } from "./_app";
import { openSans } from "theme/typography";
import createEmotionCache from "createEmotionCache";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument() {
  return (
    <Html lang="en" className={openSans.className}>
      <Head>
        {/* <link rel="shortcut icon" href="" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags} */}
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),

