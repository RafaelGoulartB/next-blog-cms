import { Text, TextProps } from '@chakra-ui/react'
import { NextPage } from 'next'
import { monthNames } from '../../pages/posts/constants'

interface Props {
  date: any
}
const PostDate: NextPage<Props & TextProps> = ({ date, ...props }) => {
  return (
    <Text color="gray.300" {...props}>{`${
      monthNames[new Date(date).getMonth()]
    } ${new Date(date).getDate()}th ${new Date(date).getFullYear()}`}</Text>
  )
}

export default PostDate
