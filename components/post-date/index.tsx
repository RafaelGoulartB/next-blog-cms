import { Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { monthNames } from '../section/postListSection/constants'

interface Props {
  date: any
}
const PostDate: NextPage<Props> = ({ date }) => {
  return (
    <Text color="gray.300">{`${
      monthNames[new Date(date).getMonth()]
    } ${new Date(date).getDate()}th ${new Date(date).getFullYear()}`}</Text>
  )
}

export default PostDate
