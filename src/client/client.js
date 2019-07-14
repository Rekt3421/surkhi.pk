import ApolloClient from "apollo-client";
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory';

const uplink = createUploadLink({ uri: "http://localhost:4000/graphql" })

const client = new ApolloClient({
    link: uplink,
    cache: new InMemoryCache()
});

export default client; 