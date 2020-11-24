import { gql } from "graphql-request";

export const getHeadSection = gql`  
  query HeadSection() {
    headSections {
      title
      description
    }
  }
`
