import React from 'react'
import { Box } from '@chakra-ui/react'
import ListPost from '../components/list-post'
import LatestCard from '../components/latest-card'
import { posts } from '../data/constants'

// import { Container } from './styles';

const About: React.FC = () => {
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

export default About
