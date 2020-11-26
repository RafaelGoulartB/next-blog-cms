import { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'

import { PostProps } from './posts/types'
import graphQLClient from '../config/graphql-client'
import { getAllPosts } from '../queries/posts'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

interface Props {
  posts: PostProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphQLClient.request(getAllPosts)

  return { props: { posts } }
}

const Article: NextPage<Props> = ({ posts }) => {
  const router = useRouter()
  const searchQuery = router.query.s
  let filteredPosts = posts

  if (searchQuery) {
    const searchTerm = String(searchQuery).toLowerCase().trim()

    filteredPosts = posts.filter(post => {
      const title = post.title.toLowerCase()
      const description = post.description.toLowerCase()

      const includesInTitle = title.includes(searchTerm)
      const includesInDescription = description.includes(searchTerm)

      if (includesInTitle || includesInDescription) return true
    })
  }

  return (
    <Box as="main">
      <ListPost>
        {filteredPosts.map(post => (
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

export default Article
