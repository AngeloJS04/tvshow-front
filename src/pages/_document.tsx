import { CssBaseline } from '@nextui-org/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="/styles/global.css" />
        {CssBaseline.flush()}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
