import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '../post-date'

import { PostProps } from '../section/postListSection/types'

const HighlightSection: React.FC<PostProps> = ({
  id,
  title,
  description,
  image,
  date
}) => {
  return (
    <Flex
      as="article"
      minH={{ base: 'none', xl: '720px' }}
      background="#f7fafc"
      flexDir={{ sm: 'column', lg: 'row-reverse' }}
      boxSizing="border-box"
      width="100%"
      my="12"
      borderRadius="sm"
    >
      {/* Image */}
      <Flex width={{ sm: '100%', lg: '60%' }} position="relative">
        <Image src={image} alt="Post Image" layout="fill" quality={100} />
      </Flex>

      {/* Text */}
      <Flex
        alignSelf="center"
        flexDir="column"
        py="24"
        pl={{ sm: '8', lg: '14' }}
        pr={{ sm: '8', lg: '20' }}
        width={{ sm: '100%', lg: '40%' }}
      >
        <Heading as="h3" fontSize="4xl" color="gray.800">
          {title}
        </Heading>
        <Text py="9" color="gray.300">
          {description}
        </Text>

        <Flex justifyContent="space-between">
          <PostDate date={date} />
          <Link href={`/posts/${id}`}>
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
