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
        <LatestCard
          id="1"
          title="long established"
          description="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that...."
          image="/images/posts/latest-post.png"
          date={new Date()}
        />
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
