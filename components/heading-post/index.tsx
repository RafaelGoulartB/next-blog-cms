import { Divider, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import PostDate from '../post-date'

interface Props {
  title: string
  author: string
  date: any
}

const HeadingPost: React.FC<Props> = ({ title, author, date }) => {
  return (
    <>
      <Heading
        as="h1"
        color="gray.800"
        textAlign={{ sm: 'center', lg: 'left' }}
        fontSize={{ sm: '4xl', lg: '5xl' }}
      >
        {title}
      </Heading>

      <Flex flexDir={{ sm: 'column', lg: 'row' }} alignItems="center" mt="8">
        <Heading
          as="h2"
          color="gray.800"
          fontSize="lg"
          mr={{ sm: '0', lg: '8' }}
        >
          Written by {author}
        </Heading>
        <PostDate date={date} fontSize="lg" />
      </Flex>

      <Divider my="8" />
    </>
  )
}

export default HeadingPost
