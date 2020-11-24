import { GetStaticProps, NextPage } from 'next'
import graphQLClient from '../config/graphql-client'
import { Box } from '@chakra-ui/react'
import HeadSection from '../components/section/head'
import PostListSection from '../components/section/postListSection'
import { getAllPosts } from '../queries/posts'
import { getHeadSection } from '../queries/head'

import { HeadSectionProps } from '../components/section/head/types'
import { PostProps } from './posts/types'

interface Props {
  head: HeadSectionProps
  posts: PostProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphQLClient.request(getAllPosts)
  const { headSections } = await graphQLClient.request(getHeadSection)

  return { props: { head: headSections[0], posts } }
}

const Home: NextPage<Props> = ({ head, posts }) => {
  return (
    <Box as="main">
      <HeadSection title={head.title} description={head.description} />
      <PostListSection posts={posts} />
    </Box>
  )
}

export default Home
