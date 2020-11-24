export interface PostProps {
  id: string
  title: string
  description: string
  text: string
  image: any
  createdAt: Date
  updatedAt?: Date
  highlight?: boolean
  author: string
}