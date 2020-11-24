export interface PostProps {
  id: string
  title: string
  description: string
  text?: string
  image: {
    url: string
    width?: number
    height?: number
  }
  createdAt: Date
  updatedAt?: Date
  highlight?: boolean
  author: string
}