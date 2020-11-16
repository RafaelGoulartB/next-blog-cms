import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const LatestCard: React.FC = () => {
  return (
    <Flex
      flexDir={{ sm: 'column', lg: 'row-reverse' }}
      boxSizing="border-box"
      width="100%"
      my="12"
      boxShadow="0px 5px 4px rgba(221, 221, 221, 0.25)"
      borderRadius="sm"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
    >
      {/* Image */}
      <Flex width={{ sm: '100%', lg: '40%' }} position="relative">
        <Image
          src="/images/posts/latest-post.png"
          alt="Post Image"
          layout="fill"
          quality={100}
        />
      </Flex>

      {/* Text */}
      <Flex
        flexDir="column"
        py="12"
        pl={{ sm: '8', lg: '14' }}
        pr={{ sm: '8', lg: '20' }}
        width={{ sm: '100%', lg: '60%' }}
      >
        <Heading as="h3" fontSize="3xl" color="gray.800">
          long established
        </Heading>
        <Text py="9" color="gray.300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </Text>

        <Flex justifyContent="space-between">
          <Text color="gray.300">May 20th 2020</Text>
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

export default LatestCard
