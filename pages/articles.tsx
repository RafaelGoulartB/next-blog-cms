import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'

import { PostSectionProps } from '../components/section/postListSection/types'
import { PostSectionFixtures } from '../components/section/postListSection/constants'

interface Props {
  posts: PostSectionProps[]
}

export const getStaticProps: GetStaticProps = async context => {
  const postJson = JSON.parse(JSON.stringify(PostSectionFixtures))

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
