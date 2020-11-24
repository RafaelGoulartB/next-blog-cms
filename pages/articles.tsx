import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'

import { PostProps } from './posts/types'
import { PostFixtures } from './posts/constants'

interface Props {
  posts: PostProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const postJson = JSON.parse(JSON.stringify(PostFixtures))

  return { props: { posts: postJson } }
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
