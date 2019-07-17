import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import {Link} from 'react-router-dom';
import '../assets/stylesheets/services.scss';

class SurkhiAboutWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: true
        }
    }
    toggleHidden = () => {
        this.setState({isHidden: !this.state.isHidden})
    }

    render(){
        let match = this.props.match;
        return(
            <Aux>
                <div className="surkhiAbout-widget">
                <div className="card-wrapper">
                    <div className="card welcome-card">
                        <div className="card-header" onClick={this.toggleHidden}>
                            <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseWelcomeCard">
                            <h1 className="title">What is Surkhi?</h1>
                            <svg className="svg-inline--fa fa-angle-down fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                            </a>
                        </div>
                        {!this.state.isHidden ? 
                        <div className="card-row collapse show" id="collapseWelcomeCard">
                            <div>
                                <div className="card-body">
                                    <div className="intro">
                                        <h3 className="card-title">Surkhi</h3>
                                        <span className="card-subtitle">/<a href="https://en.wikipedia.org/wiki/Help:IPA/English" target="_blank">surkhi</a>/ NOUN and sometimes VERB</span>
                                        <p className="card-text">SURKHI is Pakistan's 1st future media enterprise that aims to fight fake news and provide data-driven
                                        investigative reporting focusing on economics, society and politics of Pakistan. Before you scroll further, a few tips on how 
                                        to "Surkhi":</p>
                                        <ul>
                                            <li>
                                                <div className="media">
                                                    <span className="fa-stack fa-1x">
                                                        <svg className="svg-inline--fa fa-circle fa-w-16 fa-stack-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                                                        <svg className="svg-inline--fa fa-search fa-w-16 fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                                    </span>
                                                    <div className="media-body">
                                                        <h4 className="title">Search</h4>
                                                        <p className="card-text">Search for hundreds of fact checks and investigations that live in our archives. Click on the search 
                                                        icon above to start searching for real stories.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li>
                                                <div className="media">
                                                    <span className="fa-stack fa-1x">
                                                        <svg className="svg-inline--fa fa-circle fa-w-16 fa-stack-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                                                        <svg className="svg-inline--fa fa-envelope fa-w-16 fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                                    </span>
                                                    <div className="media-body">
                                                        <h4 className="title">Submit</h4>
                                                        <p className="card-text">If there is a particular news content which has not been reported, let us know! <Link 
                                                        to="/submit-topic">Send us a note</Link>. Your submission could be our next assignment.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="editors-pick">
                                        <h3 className="card-title">We bring you fact-checking and original, in-depth reporting.</h3>
                                        <div className="media-list">
                                            <article className="media-wrapper">
                                                <a className="media news type-news status-publish has-post-thumbnail" href="https://www.snopes.com/news/2019/05/26/fb-islamophobic-network-down/">
                                                    <figure className="featured-media">
                                                        <img src="https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=865,452" 
                                                            srcSet="https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=80,80&quality=65 80w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=180,180&quality=65 180w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=375,211&quality=65 375w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=416,234&quality=65 416w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=542,305&quality=65 542w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=733,412&quality=65 733w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=865,452&quality=65 865w,
                                                            https://www.snopes.com/tachyon/2019/05/kullberg-down.png?resize=1200,630&quality=65 1200w"
                                                            alt="Network of Islamophobic Facebook Pages Exposed by Snopes Goes Dark" className="lazy-resource" 
                                                            sizes="(min-width: 768px) 160px, 100vw"
                                                            data-lazy-loaded="true" 
                                                        />
                                                    </figure>
                                                    <div className="media-body-wrapper">
                                                        <div className="media-body">
                                                            <h5 className="title">Network of Islamophobic Facebook Pages Exposed by Snopes Goes Dark</h5>
                                                            <span className="label"><svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>Editor's Pick</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="support-us">
                                        <h3 className="card-title">We fight misinformation — with your support.</h3>
    
                                        <p className="card-text">Surkhi has been reliably reporting hard facts for more than For more than two decades Snopes.com has reliably reported the facts at no charge to readers, but our work is far from free to produce. Please make a contribution today.</p>
                                        <div className="btn-wrapper">
                                            <a className="btn-paypal" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=BPS6PDAXAHRQJ">Give with PayPal</a>
                                        </div>
                                        <p className="card-text small">Interested in some fine print? Click <a href="https://www.snopes.com/how-to-support/">here</a>.</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="faq">
                                        <h3 className="card-title">Frequently Asked Questions</h3>
                                        <div className="media-list">		
                                            <article className="media-wrapper">
                                                <a className="media faq type-faq status-publish" href="https://www.snopes.com/faq/may-submit-questions-images-fact-checked/">
                                                    <div className="media-body-wrapper">
                                                        <div className="media-body">
                                                            <h5 className="title"><Link to='faqs/submit-topic-to-fact-check'>May I submit items to be fact-checked?</Link></h5>						
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
    
                                            <article className="media-wrapper">
                                                <a className="media faq type-faq status-publish" href="https://www.snopes.com/faq/whats-deal-rating-system/">
                                                    <div className="media-body-wrapper">
                                                        <div className="media-body">
                                                            <h5 className="title"><Link to={'faqs/about-surkhi-meter'}>What’s the deal with your rating system?</Link></h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
    
                                            <article className="media-wrapper">
                                                <a className="media faq type-faq status-publish" href="https://www.snopes.com/faq/makes-snopes-reliable-resource/">
                                                    <div className="media-body-wrapper">
                                                        <div className="media-body">
                                                            <h5 className="title"><Link to={'faqs/is-surkhi-partisan'}>Is Surkhi partisan in its stance towards political parties?</Link></h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
    
    
                                            <article className="media-wrapper">
                                                <a className="media faq type-faq status-publish" href="https://www.snopes.com/faq/what-are-snopes/">
                                                    <div className="media-body-wrapper">
                                                        <div className="media-body">
                                                            <h5 className="title"><Link to={'faqs/surkhi-definition'}>What does 'Surkhi’ mean?</Link> </h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
    
                                            <article className="media-wrapper">
                                                <Link className="media faq type-faq status-publish" to="/faq/how-do-i-subscribe-to-your-newletter/">
                                                    <div className="media-body-wrapper">
                                                        <div className="media-body">
                                                            <h5 className="title"><Link to={'faqs/subscribe-to-newsletter'}>How do I subscribe to your newsletter?</Link></h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </article>
                                        </div>  
                                        <Link to="/faqs" className="btn btn-link">
                                            See All FAQs
                                            <svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>	
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                    </div>
                </div>
                </div>
            </Aux>
        );
    }
    
}

export default SurkhiAboutWidget;