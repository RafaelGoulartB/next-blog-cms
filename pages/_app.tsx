import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import ThemeContainer from '../contexts/theme/theme-container'

import seoConfig from '../config/seo'
import '../styles/font.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
