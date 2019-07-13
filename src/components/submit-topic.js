import React, {Component} from 'react';
import '../assets/stylesheets/App.scss';
import Navbar from './static-comps/Navbar';
import Aux from '../hoc/Auxiliary';
import Footer from './static-comps/footer';
import ReCAPTCHA from "react-google-recaptcha";
import {Link} from 'react-router-dom';

class SubmitTopic extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    validateFileSize = () => {
        console.log("hello");
    }
    recaptchaHandler = (value) => {
        console.log("Captcha value:", value);
    }
    onSubmitTopicHandler = (props) => {
        console.log(props);
    }
    render(){
        return(
            <Aux>
                <Navbar />
                <div>
                    <div className="full-width">
                        <div className="contact-banner">
                            <p className="banner-description">Fake news is rampant in the subcontinent.
                            <span className="banner-description-bold"> Surkhi needs your help!</span></p>
                            <Link to="/support-us"><button className="btn btn-outline-warning learnHow">Learn How</button></Link>
                        </div>
                    </div>
                    <div className="container">
                        <div className="contact-header">
                            <h1 className="contactUs-Title">Contact Us</h1>
                            <hr />
                            <h2 className="contactUs-subTitle"> Your feedback and stories are always welcome. </h2>
                            <hr />
                        </div>
                    </div>
                    <div className="container contact-form">
                        <div className="text-section">
                            <p>Due to the volume of correspondence we receive, we regret that we may not be able to respond 
                                personally.
                            </p>
                            <p>When sending tips, links to articles, social media posts, or images, please provide as much detail 
                                as possible, including when and where you first came across the item(s) in question. If you have 
                                supporting images or screenshots, attach them to your message using the “Choose File” button
                                below.
                            </p>
                        </div>
                        <form>
                            <input 
                                type="email" 
                                placeholder="Email..." 
                                name="email"
                                value = {this.state.email}
                                required
                                className="form-control mt-4 formEmailArea"
                            />
                            <textarea 
                                placeholder="Message" 
                                name="Message"
                                value = {this.state.message}
                                required
                                className="form-control mt-4 formTextArea"
                            />
                            <input 
                                name="file" 
                                id="fileInput" 
                                type="file" 
                                className="form-contact mt-4 formImage-wrapper" 
                                aria-describedby="extensions_message_1_3" 
                                onChange={this.validateFileSize}></input>
                            <ReCAPTCHA 
                                sitekey = '6LeQy6sUAAAAAI9oj7h2_feWtLQGkKr0RYhRnpxb'
                                onChange = {this.recaptchaHandler}
                                className="mt-4 recaptcha-wrapper"    
                            />
                            <button type="button" className="btn mt-3 btn-success submit" onSubmit={this.submitTopicHandler}>Submit</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </Aux>
        )
    }
}

export default SubmitTopic;
