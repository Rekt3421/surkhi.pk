import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './static-comps/Navbar';
import Footer from './static-comps/footer';
import '../assets/stylesheets/App.scss';

class FAQs extends Component 
{
    render(){
        let match = this.props.match;
        return(
            <Aux>
                <Navbar />
                    <div className="base-wrapper">
                        <div className="container">
                            <div className="contact-header">
                                <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                                <hr />
                                <h2 className="contactUs-subTitle"> A repository of questions and answers that readers usually have</h2>
                                <hr />
                            </div>
                        </div>

                        <div className="container">
                            <div className="individual-post d-flex bd-highlight">
                                <div className="col-md-4">
                                    <div className="info-topic-header">
                                        <h5 className="label">Topic</h5>
                                        <h3 className="card-title">Editorial Process</h3>
                                        <hr />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="questions-header">
                                        <ul className="questions">
                                            <li><Link to={`${match.url}/submit-topic-to-fact-check`}>Can I submit topics to be verified or fact-checked?</Link></li>
                                            <li><Link to={`${match.url}/surkhi-fact-checking-process`}>What is your fact-checking process?</Link></li>
                                            <li><Link to={`${match.url}/accepting-guest-posting`}>Does Surkhi.pk does guest posting for third parties?</Link></li>
                                            <li><Link to={`${match.url}/decide-topic-fact-check`}>How do you decide what to write about?</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="individual-post d-flex bd-highlight">
                                <div className="col-md-4">
                                    <div className="info-topic-header">
                                        <h5 className="label">Topic</h5>
                                        <h3 className="card-title">Surkhi</h3>
                                        <hr />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="questions-header">
                                        <ul className="questions">
                                            <li><Link to={`${match.url}/about-surkhi-meter`}>What is Surkhi Meter and how are the ratings decided?</Link></li>
                                            <li><Link to={`${match.url}/surkhi-definition`}>What does the word 'Surkhi' even mean?</Link></li>
                                            <li><Link to={`${match.url}/is-surkhi-partisan`}>Is Surkhi partisan when dealing with politically charged news?</Link></li>
                                            <li><Link to={`${match.url}/typo-in-surkhi-post`}>I see a typo in one of your post, can I report it?</Link></li>
                                        </ul>  
                                    </div>
                                </div>
                            </div>
                            <div className="individual-post d-flex bd-highlight">
                                <div className="col-md-4">
                                    <div className="info-topic-header">
                                        <h5 className="label">Topic</h5>
                                        <h3 className="card-title">Tech Support</h3>
                                        <hr />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="questions-header">
                                        <ul className="questions">
                                            <li><Link to={`${match.url}/subscribe-to-newsletter`}>How do I subscribe to your newsletter?</Link></li>
                                            <li><Link to={`${match.url}/reproducing-content-on-another-website`}>May I reproduce your content on my website?</Link></li>
                                            <li><Link to={`${match.url}/displaying-links-on-external-website`}>Can I put a link of one of your posts on my blog or website?</Link></li>
                                            <li><Link to={`${match.url}/allowing-comments-on-posts`}>Why don't you allow comments on your posts?</Link></li>
                                        </ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </Aux>
            
        );
    }
        
}

export default FAQs;