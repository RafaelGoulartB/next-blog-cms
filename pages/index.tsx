import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import HeadSection from '../components/head'
import HighlightSection from '../components/highlight-card'
import LatestCard from '../components/latest-card'
import ListPost from '../components/list-post'
import PostCard from '../components/post-card'
import PostCardContainer from '../components/post-card/container'

import { PostProps, Posts } from '../data/posts'
import { HeadContentProps } from '../components/head/types'

interface Props {
  head: HeadContentProps
  posts: PostProps[]
}

const Home: NextPage<Props> = ({ head, posts }) => {
  return (
    <Box as="main">
      <HeadSection title={head.title} description={head.description} />
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
        <HighlightSection
          id="1"
          title="What is Lorem Ipsum?"
          description="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution..."
          image="/images/posts/highlight-post.png"
          date={new Date()}
        />
      </ListPost>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const postsJson = JSON.parse(JSON.stringify(Posts))
  return { props: { head: {}, posts: postsJson } }
}

export default Home
