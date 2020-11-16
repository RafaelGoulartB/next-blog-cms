import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const HighlightSection: React.FC = () => {
  return (
    <Flex
      background="#f7fafc"
      flexDir={{ sm: 'column', lg: 'row-reverse' }}
      boxSizing="border-box"
      width="100%"
      my="12"
      borderRadius="sm"
    >
      {/* Image */}
      <Flex width={{ sm: '100%', lg: '55%' }} position="relative">
        <Image
          src="/images/posts/highlight-post.png"
          alt="Post Image"
          layout="fill"
          quality={100}
        />
      </Flex>

      {/* Text */}
      <Flex
        flexDir="column"
        py="24"
        pl={{ sm: '8', lg: '14' }}
        pr={{ sm: '8', lg: '20' }}
        width={{ sm: '100%', lg: '45%' }}
      >
        <Heading as="h3" fontSize="4xl" color="gray.800">
          What is Lorem Ipsum?
        </Heading>
        <Text py="9" color="gray.300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution...
        </Text>

        <Flex justifyContent="space-between">
          <Text color="gray.300">May 20</Text>
          <Link href="/post/1">
            <Text
              as="a"
              color="gray.800"
              fontWeight="bold"
              _hover={{ cursor: 'pointer', textDecor: 'underline' }}
            >
              Read more
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HighlightSection
