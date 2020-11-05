import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import seoConfig from '../config/seo'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </>
    </>
  )
}

export default MyApp
