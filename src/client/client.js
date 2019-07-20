import ApolloClient from "apollo-client";
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';


const app_uri = process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:4000/graphql'

const uploadLink = createUploadLink({ uri: app_uri });

const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
});


export default client; 
