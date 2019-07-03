import React, {Component} from 'react';
import donationButton from '../assets/images/donate-button.png';
import paypalLogo from '../assets/images/paypal-logo.png';
import creditcards from '../assets/images/credit-cards.png';
import '../assets/stylesheets/App.scss';
import Aux from '../hoc/Auxiliary';
import Navbar from './static-comps/Navbar';
import Footer from './static-comps/footer';

class SupportPage extends Component
{
    render(){
        return(
            <Aux>
                <Navbar />
                <div className="base-wrapper">
                    <div className="container">
                        <div className="contact-header">
                            <h1 className="contactUs-Title">Support Surkhi</h1>
                            <hr />
                            <h2 className="contactUs-subTitle"> Cooperate with us in curbing spread of misinformation.</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="container">
                        <div className="support-wrapper">
                            <div className="col-md-6">
                                <div className="text-section">
                                    <p>
                                        We have been fighting falsified information and fake news since 2018. Surkhi.pk has established 
                                        itself as a reliable source of reported facts and has done so at no charge, but our work is far
                                        from free to produce. Make a contribution today and help ensure the Pakistan's most trusted 
                                        fact-checking site endures — and grows.
                                    </p>
                                    <p>
                                        Contributions to Surkhi.pk are not tax-deductible; however, they absolutely further our mission to
                                        fight misinformation. We will appreciate the gesture. </p>
                                    <p>
                                        You can give by using Paypal or GoFundMe.
                                    </p>
                                    <p>
                                        Coming soon: You will be able support Surkhi.pk through our member subscription program. Sign up 
                                        for updates or contact us directly to help us understand what content and benefits will interest0
                                        you.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Make a contribution</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="paypal-logo-style"><img alt="paypal-logo-surkhi" src={paypalLogo} /></div>
                                        <p className="card-text">Investigative journalism is important for society. Help Surkhi.pk continue to 
                                            provide top quality, 'real' content to you.
                                        </p>
                                        <div className="donation-section">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_donations" />
                                                <input type="hidden" name="business" value="DKKQ9TNWDZ2MW" />
                                                <input type="hidden" name="currency_code" value="USD" />
                                                <button type="button" className="btn btn-primary donation-button">Contibute</button>
                                                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-footer donation-footer">
                                        <img src={creditcards} />
                                    </div>
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

export default SupportPage;