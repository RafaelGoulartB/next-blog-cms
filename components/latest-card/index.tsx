import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const LatestCard: React.FC = () => {
  return (
    <Flex
      px="0"
      boxSizing="border-box"
      width="100%"
      my="12"
      boxShadow="0px 5px 4px rgba(221, 221, 221, 0.25)"
      borderRadius="sm"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
    >
      <Text p="8">Latest Card</Text>
    </Flex>
  )
}

export default LatestCard
