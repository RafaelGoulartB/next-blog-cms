import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Flex align="center" mr={5}>
      <Link href="/">
        <Heading as="h1" color="black" fontSize="xl">
          HotCoffee
        </Heading>
      </Link>
    </Flex>
  )
}

export default Logo
