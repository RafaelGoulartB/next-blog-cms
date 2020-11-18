import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import HeadSection from '../components/section/head'
import PostListSection from '../components/section/postListSection'

import { HeadSectionProps } from '../components/section/head/types'
import { PostSectionProps } from '../components/section/postListSection/types'
import { PostSectionFixtures } from '../components/section/postListSection/constants'

interface Props {
  head: HeadSectionProps
  posts: PostSectionProps[]
}

const Home: NextPage<Props> = ({ head, posts }) => {
  return (
    <Box as="main">
      <HeadSection title={head.title} description={head.description} />
      <PostListSection posts={posts} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const postJson = JSON.parse(JSON.stringify(PostSectionFixtures))

  return { props: { head: {}, posts: postJson } }
}

export default Home
