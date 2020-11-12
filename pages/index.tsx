import React from 'react'
import { Heading } from '@chakra-ui/core'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Header />

      <Heading>Hello World</Heading>

      <Footer />
    </>
  )
}
