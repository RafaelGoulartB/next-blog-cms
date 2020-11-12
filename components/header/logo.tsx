import React from 'react'
import { Flex } from '@chakra-ui/core'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Flex align="center" mr={5}>
      <Link href="/">
        <Image src="/images/logo.png" width="260px" height="26x" />
      </Link>
    </Flex>
  )
}

export default Logo
