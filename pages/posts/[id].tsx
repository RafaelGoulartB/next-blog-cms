import React from 'react'
import { Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'

const Post: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Text>Post {id}</Text>
    </>
  )
}

export default Post
