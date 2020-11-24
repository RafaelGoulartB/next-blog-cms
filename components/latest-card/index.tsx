import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '../post-date'

import { PostProps } from '../../pages/posts/types'

const LatestCard: React.FC<PostProps> = ({
  id,
  title,
  description,
  image,
  createdAt
}) => {
  return (
    <Flex
      as="article"
      flexDir={{ sm: 'column', lg: 'row-reverse' }}
      boxSizing="border-box"
      width="100%"
      mt="6"
      boxShadow="0px 5px 4px rgba(221, 221, 221, 0.25)"
      borderRadius="sm"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
      _last={{
        mb: '6'
      }}
    >
      {/* Image */}
      <Flex width={{ sm: '100%', lg: '40%' }} position="relative">
        <Image src={image.url} alt={title} layout="fill" quality={100} />
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
          {title}
        </Heading>
        <Text py="9" color="gray.300">
          {description}
        </Text>

        <Flex justifyContent="space-between">
          <PostDate date={createdAt} />
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

export default LatestCard
