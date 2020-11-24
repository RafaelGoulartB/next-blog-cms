import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'

import { PostProps } from './posts/types'
import graphQLClient from '../config/graphql-client'
import { getAllPosts } from '../queries/posts'

interface Props {
  posts: PostProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphQLClient.request(getAllPosts)

  return { props: { posts } }
}

const About: NextPage<Props> = ({ posts }) => {
  return (
    <Box as="main">
      <ListPost>
        {posts.map(post => (
          <LatestCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            createdAt={post.createdAt}
            author={post.author}
          />
        ))}
      </ListPost>
    </Box>
  )
}

export default About
