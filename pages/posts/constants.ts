import { PostProps } from "./types"

export const PostFixtures: PostProps[] = [
  {
    id: '0',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    text: 'Test Test',
    image: '/images/posts/latest-post.png',
    date: new Date(),
    highlight: false,
    author: 'Rafael'
  },
  {
    id: '1',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    text: 'Test Test',
    image: '/images/posts/post-1.png',
    date: new Date(),
    highlight: false,
    author: 'Rafael'
  },
  {
    id: '2',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    text: 'Test Test',
    image: '/images/posts/post-2.png',
    date: new Date(),
    highlight: false,
    author: 'Rafael'
  },
  {
    id: '3',
    title: 'long established',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
    image: '/images/posts/post-3.png',
    text: 'Test Test',
    date: new Date(),
    highlight: false,
    author: 'Rafael'
  },
  {
    id: '4',
    title: 'What is Lorem Ipsum?',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...',
    text: 'Test Test',
    image: '/images/posts/highlight-post.png',
    date: new Date(),
    highlight: true,
    author: 'Rafael'
  }
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