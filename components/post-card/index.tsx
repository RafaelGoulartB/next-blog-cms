import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '../post-date'

import { PostSectionProps } from '../section/postListSection/types'

const PostCard: React.FC<PostSectionProps> = ({
  id,
  title,
  description,
  image,
  date
}) => {
  return (
    <Flex
      as="article"
      flexDir="column"
      boxSizing="border-box"
      width={{ sm: '100%', lg: '32%' }}
      boxShadow="0px 5px 4px rgba(221, 221, 221, 0.25)"
      borderRadius="sm"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
      mt="8"
    >
      {/* Image */}
      <Flex position="relative" alignSelf="center">
        <Image src={image} alt={title} quality={100} width={480} height={290} />
      </Flex>

      {/* Text */}
      <Flex flexDir="column" py="12" pl="8" pr="8">
        <Heading as="h3" fontSize="3xl" color="gray.800">
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

export default PostCard
