import React from 'react'
import { Flex } from '@chakra-ui/react'

const ListPost: React.FC = ({ children }) => {
  return (
    <Flex maxW="1200px" w="100%" mx="auto" paddingX="10" boxSizing="border-box">
      {children}
    </Flex>
  )
}

export default ListPost
