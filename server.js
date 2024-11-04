import { ApolloServer, gql } from "apollo-server";

// const { ApolloClient, gql } = require("apollo-client");
const typeDefs = gql`
    type Query {
    id: ID!
    title: String!
    releaseDate: String
    director: String
    actors: [String]
    }
`;

const server = new ApolloServer({});

server.listen().then(({URL}) => {
    console.log(`Server ready at ${URL}`);
});