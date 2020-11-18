import { NextPage } from 'next'
import HighlightSection from '../../highlight-card'
import LatestCard from '../../latest-card'
import ListPost from '../../list-post'
import RecentPostCard from '../../recent-posts'
import RecentPostsContainer from '../../recent-posts/container'

import { PostSectionFixtures } from './constants'
import { PostSectionProps } from './types'

interface Props {
  posts: PostSectionProps[]
}

const PostListSection: NextPage<Props> = ({ posts = PostSectionFixtures }) => {
  const latestPost = posts[0]
  const highlightPost = []
  const recentPosts = []

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
        {posts.map((post, index) => {
          if (index > 0)
            return (
              <RecentPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
              />
            )
          else if (index >= 4) return
        })}
      </RecentPostsContainer>
      <HighlightSection
        id="1"
        title="What is Lorem Ipsum?"
        description="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution..."
        image="/images/posts/highlight-post.png"
        date={new Date()}
      />
    </ListPost>
  )
}

export default PostListSection
