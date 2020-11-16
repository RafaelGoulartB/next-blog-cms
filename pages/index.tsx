import React from 'react'
import { Box } from '@chakra-ui/react'
import HeadSection from '../components/head'
import HighlightSection from '../components/highlight-card'
import LatestCard from '../components/latest-card'
import ListPost from '../components/list-post'
import PostCard from '../components/post-card'
import PostCardContainer from '../components/post-card/container'
import { posts } from '../data/constants'

export default function Home() {
  return (
    <Box as="main">
      <HeadSection />
      <ListPost>
        <LatestCard />
        <PostCardContainer>
          {posts.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              date={post.date}
            />
          ))}
        </PostCardContainer>
        <HighlightSection />
      </ListPost>
    </Box>
  )
}
