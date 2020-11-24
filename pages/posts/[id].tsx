import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import HeadingPost from '../../components/heading-post'
import Image from 'next/image'
import graphQLClient from '../../config/graphql-client'
import { getAllPosts, getPostById } from '../../queries/posts'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { GetStaticPaths } from 'next'
import { PostFixtures } from './constants'
import { PostProps } from './types'

interface Props {
  post: PostProps
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.id
  }

  const { post } = await graphQLClient.request(getPostById, variables)

  post.text = matter(post.text).content

  return { props: { post } }
}

const Post: React.FC<Props> = ({ post = PostFixtures[0] }) => {
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
        <Image src={post.image.url} layout="fill" />
      </Box>

      <Flex
        mt="12"
        flexDir="column"
        maxW="1200px"
        w="100%"
        mx="auto"
        paddingX={{ sm: '0', md: '16', lg: '34' }}
        boxSizing="border-box"
      >
        <HeadingPost
          title={post.title}
          author={post.author.name}
          date={post.createdAt}
        />

        <ReactMarkdown source={post.text} />
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphQLClient.request(getAllPosts)

  const paths = posts.map(post => ({
    params: { id: post.id }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export default Post
