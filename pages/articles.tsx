import { GetStaticProps, NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'

import { PostProps } from './posts/types'
import graphQLClient from '../config/graphql-client'
import { getAllPosts } from '../queries/posts'
import { useRouter } from 'next/dist/client/router'

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
    const searchTerms = String(searchQuery).toLowerCase().trim()
    const searchTermsArray = searchTerms
      .split(' ')
      .filter(term => term.length > 2)

    filteredPosts = posts.filter(post => {
      const title = post.title.toLowerCase()
      const description = post.description.toLowerCase()

      let includesInTitle
      let includesInDescription

      searchTermsArray.forEach(searchTerm => {
        includesInTitle = title.includes(searchTerm)
        includesInDescription = description.includes(searchTerm)

        return includesInTitle || includesInDescription
      })

      if (includesInTitle || includesInDescription) return true
    })
  }

  return (
    <Box as="main">
      <ListPost>
        {filteredPosts.length === 0 && (
          <Text textAlign="center" fontWeight="bold" fontSize="3xl" my="40">
            Sorry. Post not founded.
          </Text>
        )}

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
