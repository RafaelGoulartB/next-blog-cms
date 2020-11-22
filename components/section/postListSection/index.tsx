import { NextPage } from 'next'
import HighlightSection from '../../highlight-card'
import LatestCard from '../../latest-card'
import ListPost from '../../list-post'
import RecentPostCard from '../../recent-card'
import RecentPostsContainer from '../../recent-card/container'

import { PostSectionFixtures } from './constants'
import { PostSectionProps } from './types'

interface Props {
  posts: PostSectionProps[]
}

const PostListSection: NextPage<Props> = ({ posts = PostSectionFixtures }) => {
  const latestPost = posts[0]
  const highlightPosts = posts.filter(post => post.highlight === true)
  const recentPosts = posts.filter((post, index) => index !== 0 && index <= 3)

  return (
    <ListPost>
      <LatestCard
        id={latestPost.id}
        title={latestPost.title}
        description={latestPost.description}
        image={latestPost.image}
        date={latestPost.date}
      />
      <RecentPostsContainer>
        {recentPosts.map(post => (
          <RecentPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            date={post.date}
          />
        ))}
      </RecentPostsContainer>
      {highlightPosts.map(post => (
        <HighlightSection
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
          date={post.date}
        />
      ))}
    </ListPost>
  )
}

export default PostListSection
