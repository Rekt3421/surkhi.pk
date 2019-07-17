import React, {Component} from 'react';
import '../assets/stylesheets/App.scss';
import PostCreator from './PostCreator';
import Navbar from './static-comps/Navbar';
import Footer from './static-comps/footer';
import Posts from './Posts';
import SearchBar from './SearchBar';
import SurkhiAboutWidget from './WhatisSurkhi';

// Apollo and Graphql
import {Query} from "react-apollo";
import gql from "graphql-tag";


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
                <Posts />
                    
                <Footer />
            </div>
        );

        
    }

}

export default Home;