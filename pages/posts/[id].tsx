import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { GetStaticPaths } from 'next'

import { PostFixtures } from './constants'
import { PostProps } from './types'

interface Props {
  post: PostProps
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Box as="main">
      <Text>Post {post.id}</Text>
    </Box>
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

export async function getStaticProps({ params }) {
  const post = JSON.parse(JSON.stringify(PostFixtures[params.id]))

  return { props: { post } }
}

export default Post
