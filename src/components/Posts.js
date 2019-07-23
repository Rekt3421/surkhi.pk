import React from 'react'
import Post from './Post';

import {Query} from "react-apollo";
import gql from "graphql-tag";

const GET_POSTS = gql`
{
    posts {
        key
        postTitle
        postSummary
        verdict
        category
        image
    }
}
`;

const Posts = () => {
        return(
        <React.Fragment>
            <Query query={GET_POSTS}>
                {({loading, error, data}) =>{
                    if (loading) return `${loading.message}`;
                    if (error) {
                        console.log(error);
                        console.log(error.message);
                        return `Error! ${error.message}`;
                    }
                    let postArray = data['posts'].reverse()
                    console.log(postArray);
                    return postArray.map( post => {
                        return (
                        <Post 
                            postTitle = {post.postTitle}
                            postSummary={post.postSummary} 
                            image = {require('../assets/server-images/' + post.image)}
                            key = {post.key}
                            verdict = {require('../assets/images/surkhi-meter-images/' + post.verdict)} />
                        );
                    });
                }
            }
            </Query>
        </React.Fragment>
        );
} 

export default Posts;