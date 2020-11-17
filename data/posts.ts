export interface PostProps {
  id: string,
  title: string
  description: string
  image: any
  date: Date,
}

export const Posts: PostProps[] = [
  {
    id: '1',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    image: '/images/posts/post-1.png',
    date: new Date()
  },
  {
    id: '2',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    image: '/images/posts/post-2.png',
    date: new Date()
  },
  {
    id: '3',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    image: '/images/posts/post-3.png',
    date: new Date()
  },
]

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]