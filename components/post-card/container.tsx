import React from 'react'
import { Flex } from '@chakra-ui/react'

const PostCardContainer: React.FC = ({ children }) => {
  return (
    <Flex mt="12" flexDir={{ sm: 'column', lg: 'row' }} justify="space-between">
      {children}
    </Flex>
  )
}

export default PostCardContainer
