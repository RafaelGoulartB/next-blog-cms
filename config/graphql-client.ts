import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export default graphQLClient;