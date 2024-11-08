import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});
client.query({
    query: gql`
        query {
            allMovies{
                title
            }
        }
    `,
})
.then((res) => console.log(res));

export default client;