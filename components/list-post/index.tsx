import React from 'react'
import { Flex } from '@chakra-ui/react'

const ListPost: React.FC = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      maxW="1440px"
      w="100%"
      mx="auto"
      paddingX={{ sm: '10', lg: '24' }}
      boxSizing="border-box"
    >
      {children}
    </Flex>
  )
}

export default ListPost
