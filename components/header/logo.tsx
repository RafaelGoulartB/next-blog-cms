import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Flex align="center" mr={5}>
      <Link href="/">
        <Heading as="h1">HotCoffee</Heading>
      </Link>
    </Flex>
  )
}

export default Logo
