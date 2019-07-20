import ApolloClient from "apollo-client";
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory';

const uplink = createUploadLink({ 
    uri: "https://surkhi-beta.herokuapp.com"
})

const client = new ApolloClient({
    link: uplink,
    cache: new InMemoryCache()
});

export default client; 
