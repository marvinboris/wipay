import { Html, Head, Main, NextScript } from 'next/document'

import tailwindConfig from '../tailwind.config'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css" />
        <link rel="icon" href="/images/favicon.svg" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta name="application-name" content={process.env.NEXT_PUBLIC_APP_NAME} />

        <meta name="msapplication-TileColor" content={tailwindConfig.theme.extend.colors.primary[400]} />

        <base href="/" />

        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />

        <meta name="twitter:card" content="summary" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}