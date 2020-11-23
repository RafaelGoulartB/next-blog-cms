import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { GetStaticPaths } from 'next'

import { PostFixtures } from './constants'
import { PostProps } from './types'
import Image from 'next/image'
import HeadingPost from '../../components/heading-post'

interface Props {
  post: PostProps
}

export async function getStaticProps({ params }) {
  const post = JSON.parse(JSON.stringify(PostFixtures[params.id]))

  return { props: { post } }
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Flex
      as="main"
      flexDir="column"
      maxW="1440px"
      mx="auto"
      paddingX={{ base: 10, sm: 10, lg: 20 }}
    >
      {/* Image */}
      <Box
        position="relative"
        w="100%"
        h={{ sm: '30vh', md: '30vh', lg: '380px', xl: '40vh' }}
      >
        <Image src={post.image} layout="fill" />
      </Box>

      <Flex
        mt="12"
        flexDir="column"
        maxW="1200px"
        w="100%"
        mx="auto"
        paddingX={{ sm: '16', lg: '34' }}
        boxSizing="border-box"
      >
        <HeadingPost title={post.title} author={post.author} date={post.date} />

        <Text>{post.text}</Text>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postJson = JSON.parse(JSON.stringify(PostFixtures))

  const paths = postJson.map(post => ({
    params: { id: post.id }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export default Post
