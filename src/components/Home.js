import React, {Component} from 'react';
import '../assets/stylesheets/App.scss';
import PostCreator from './PostCreator';
import Navbar from './static-comps/Navbar';
import Footer from './static-comps/footer';
import SearchBar from './SearchBar';
import SurkhiAboutWidget from './WhatisSurkhi';

// Apollo and Graphql
import {Query} from "react-apollo";
import gql from "graphql-tag";

const GET_POSTS = gql`
{
    posts {
        key
        title
        summary
        verdict
        category
        image
    }
}
`;

const Post = () => (
    <Query query={GET_POSTS}>
        {({loading, error, data}) =>{
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        
        let postArray = data['posts'].reverse()
        return(
            postArray.map(post=>{
                console.log(post)
                
                return(
                    <div className="container individual-post" key={post.key}>
                        <div className="row h-100">
                            <div className="col my-auto">
                                <div className="pic mx-auto"><img src={require(`../server/server-images/${post.image}`)} width="80" height="80" alt=""/></div>
                            </div>
                            <div className="col-6 my-auto">
                                <div className="headline">{post.title}</div>
                                <div className="description">{post.summary}</div>
                            </div>
                            <div className="col my-auto">
                                <div className="verdict mx-auto"><img src={require(`../server/truth-images/${post.verdict}`)} alt=""/></div>
                            </div>
                        </div>
                    </div>
                );
            })
        )
        }}
    </Query>
);


class Home extends Component{
    render(){
        return(
            <div className="app-container">
                <div className="landing-page">
                    <Navbar />
                    <SearchBar />
                </div>
                <SurkhiAboutWidget />
                <PostCreator />
                    <Post/>
                    <Footer />
            </div>
        );

        
    }

}

export default Home;