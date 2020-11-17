import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'

import { PostProps, Posts } from '../data/posts'

interface Props {
  posts: PostProps[]
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
            date={post.date}
          />
        ))}
      </ListPost>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const postsJson = JSON.parse(JSON.stringify(Posts))
  return { props: { posts: postsJson } }
}

export default About
