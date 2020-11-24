import { gql } from "graphql-request";

export const getAllPosts = gql`  
  query Posts() {
    posts {
      id
      title
      description
      text
      image {
        url
        width
        height
      }
      createdAt
      highlight
    }
  }
`

export const getAllPostsPaths = gql`  
  query PostsPath() {
    posts {
      id
    }
  }
`