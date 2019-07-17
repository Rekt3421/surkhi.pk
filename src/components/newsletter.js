import React, {Component} from 'react';
import Navbar from './static-comps/Navbar';
import Footer from './static-comps/footer';
import Aux from '../hoc/Auxiliary';

class NewsLetter extends Component {
    render(){
        return(
            <Aux>
                <Navbar />
                <div className="base-wrapper">
                    <div className="container">
                        <div className="contact-header">
                            <h1 className="contactUs-Title">Newsletter Subscription</h1>
                            <hr />
                            <h2 className="contactUs-subTitle"> Subscribe to us to receive only the best collection of fact checks</h2>
                            <hr />
                        </div>
                    </div>

                </div>
                <Footer />
            </Aux>
        );
    }
}

export default NewsLetter;