import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import Navbar from '../static-comps/Navbar';
import Footer from '../static-comps/footer';
import SurkhiMeter from '../../assets/images/surkhi-meter-images/Mumkin.png';


const SubmitTopicQuestion = () => {
        return (
            <Aux>
                <Navbar />
                <div className="base-wrapper">
                    <div className="container">
                        <div className="contact-header">
                            <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                            <hr />
                            <h2 className="FAQ-subtitle"> Can I submit topics to be verified or fact-checked? </h2>
                            <hr />
                        </div>
                    </div>
                    <div className="container">
                        <div className="support-wrapper">
                            <div className="col-md-8 pl-0 pr-0">
                                <h5 className="faq-label">Answer</h5>
                                <div className="text-section">
                                    <p>Absolutely! If you feel there is a topic that is getting alot of notice and is worth reporting, send us 
                                        by clicking on the "Submit a Topic" button above in the menu.
                                    </p>
                                    <p>When sending a topic, make sure you attach appropriate links to articles, social media posts, or images. Please provide as
                                        much detail as possible, including when and where you first came across the item(s) in question. If you have supporting images 
                                        or screenshots, attach them to your message using the “Choose File” button.
                                    </p>
                                </div>
                                <div className="mt-5 mb-5">
                                    <button type="button" className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />      
            </Aux>   
        );
}


const SurkhiProcess = () => {
        return (
            <Aux>
                <Navbar />
                <div className="base-wrapper">
                    <div className="container">
                        <div className="contact-header">
                            <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                            <hr />
                            <h2 className="FAQ-subtitle">What is your fact-checking process like? </h2>
                            <hr />
                        </div>
                    </div>
                    <div className="container">
                        <div className="support-wrapper">
                            <div className="col-md-8 pl-0 pr-0">
                                <h5 className="faq-label">Answer</h5>
                                <div className="text-section">
                                    <p> 
                                        We follow a thorough fact-checking process here at Surkhi making sure all content we post is unbiased, 
                                        accurate to a highest degree. Our first line of defence is investigation and review by 3rd party consultants,
                                        where we delve into the source material to find and/or amend discrepancies. 
                                        
                                    </p>
                                    <p>
                                        The second line of defence is peer reporting, empowering out community to cross-reference the object of our process with a 
                                        variety of other news pieces disseminated by non-affiliated institutions, if any. Fake news should not be just be a solo 
                                        battle but a collective effort.
                                    </p>
                                    <p> 
                                        We are in the process of developing an experimental machine learning framework, which takes into account 
                                        a plethora of parameters in the digital ecosystem to find and identify citations, sources, organic reporting 
                                        patterns, etc.
                                    </p>
                                </div>
                                <div className="mt-5 mb-5">
                                    <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />      
            </Aux>   
        );

}

const AcceptingGuestPost = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">Does Surkhi.pk do guest posting for third parties?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>
                                    Short answer: No, we do not allow third parties to guest post on our platform.
                                </p>
                                <p>
                                    Long answer: Onboarding guest writers regardless of their expertise to research for Surkhi on special topics outside the 
                                    ones we regularly report is intriguing; however, we want to practice caution and protect the trust we have built with our 
                                    readers. Properly verifying the credibility of several guest writers and their sources requires a big investment of
                                    time and resources we just don’t have.
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );

}

const DecideTopicFactCheck = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">How do you decide what to write about?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>It isn’t so much what we decide to report about, but more what the people want to know more about. In our region of the 
                                    world, people are primarily interested in objective socio-economic news, but due to the charged political climate of both 
                                    our society in general as well as the capitalist modalities under which our news media operate, that can be hard to attain 
                                    for the masses. We feel it is our duty as citizens of this nation to hold these organizations accountable and do our best 
                                    in painting a clearer picture for the everyday citizen of Pakistan.
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const AboutSurkhiMeter = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">What is Surkhi Meter and how are the ratings decided?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p className="mb-3">Surkhi Meter is a tool akin to a Likert Scale which helps to visualize the honesty rating of 
                                    news pieces which are run through our validation engine. The scale has five levels namely: 
                                </p>
                                <table class="surkhimeter-about table table-bordered table-dark">
                                    <thead>
                                        <tr>
                                        <th scope="col">Verdict</th>
                                        <th scope="col">Explanation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="kharasuch">
                                            <th scope="row">Khara Such</th>
                                            <td>
                                                Translates to absolute truth. This is when the claim presented holds true,
                                                and agrees to multiple strong sources
                                            </td>
                                        </tr>
                                        <tr className="such">
                                            <th scope="row">Such</th>
                                            <td>
                                                Translates to truth. Claims that are tallying to be truthful from numerous accounts are labelled.
                                            </td>
                                        </tr>
                                        <tr className="mumkin">
                                            <th scope="row">Mumkin</th>
                                            <td>
                                                Translates to accepted but with a certain amount of doubt. This is designated for claims that are true
                                                but different sources report a mixed reviews, data, bulletins.
                                            </td>
                                        </tr>
                                        <tr className="jhoot">
                                            <th scope="row">Jhoot</th>
                                            <td>
                                                Translates to false. We would use this label on claims that are fabricated, weak or ones that lack credible sources.
                                            </td>
                                        </tr>
                                        <tr className="fulljhoot">
                                            <th scope="row">Jhootay Ka Muun Kala</th>
                                            <td>
                                            Designated for news which are 100% fake, hoaxes, events that have not
                                            occurred at all or are completely impossible to imagine.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p> In the posts that we publish you will see the Surkhi Meter&trade; similar to the one below whose scale will point at 
                                    the label denoting the credibility of the claim. 
                                </p>
                                <div className="surkhi-meter-image"><img alt="surkhi-meter" src={SurkhiMeter} /></div>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}
const SurkhiDefinition = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">What does the word 'Surkhi' even mean?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>
                                    Surkhi was a colloquial nomenclature given to newspaper headlines, coined in the print news era.
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const IsSurkhiPartisan = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">Is Surkhi partisan when dealing with politically charged news?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>
                                    Every individual, or organization, has an inherent bias towards certain notions based on what is available and what 
                                    information they are exposed to. The human element of Surkhi, emulating the highest journalistic standards, tries to be 
                                    as objective as humanly possible but there always will be comments passed on us that we siding with a particular political
                                    party, which is not true. We try to stay as objective and centrist as the laws of nature can allow. 
                                </p>  
                                <p>
                                    We also plan to incorporate machine learning as part our system to predict the credibility and authenticity of news
                                    but we haven't done so as we are gathering data enough so we ourselves have full trust in the mechanism.
                                </p>
                                
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const TypoInSurkhiPost = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">I see a typo in one of your post, can I report it?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>Please do! Corrections are welcome if there is an error from our side; but bare in mind that some text appearing in a colored
                                    box represents quotations that we cite from various source which is not our own writing. We reproduce them exactly as we 
                                    discovered them; hence, we do not edit that particular content. 
                                </p>
                                <p>Use our <Link to="/contact">contact form</Link> to inform us about any mistakes or typos Surkhi made which is not a
                                quotation.
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const SubscribeToNewsLetter = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">How do I subscribe to your newsletter?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>
                                    There are two ways you can do that. You can scroll down to the bottom of the app and subscribe by
                                    entering your email in the widget. Second way is more flexible in which you can subscribe to
                                    two different types of newsletter of your choice: </p>
                                <p>
                                    1) Featured posts on Surkhi or,
                                    <br />
                                    2) Top 10 most viewed posts of the week
                                </p>
                                <p>
                                    You can go to the <Link to='/newsletter'>Newsletter page</Link> to subscribe to your choice of Surkhi posts. 
                                </p>
                                <p>
                                    Regardless of your subscription choice, we promise not to be spammy. But in the case you want to unsubscribe,
                                    you can do so through the newsletter page or an easier way would be to click on the unsubscribe button in
                                    email you get from us.
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const ReproducingContent = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">Am I allowed to reproduce your content on my website?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>
                                    All content on our various platforms is the intellectual property of Surkhi and cannot 
                                    be reproduced anywhere without attribution. Proceeding to do that would be considered copyright 
                                    infringement, even if your website is an NGO or is non-commercial. 
                                </p>
                                <p>
                                    Our reporters work super hard to bring our audience precise and error-free content. Copying our 
                                    content devalues are attempt to generate revenues which is necessary for us to continue this app
                                    as a free resource. 
                                </p>
                                <p>
                                    However, you can definitely use our links as citations or link them to your article/blog posts. You 
                                    are also allowed to share the links within your social media groups but strictly cannot copy the text
                                    without giving proper credit or pasting them in your blog posts without quotes.
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const DisplayingLinksOnWebsite = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">Can I put a link of one of your posts on my blog or website</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p>You are absolutely allowed to share or attach a link of our site to your website. Copying the 
                                    contents of our website blatantly  would be considered as copyright infringement. 
                                </p>                                
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

const AllowingCommentsOnPosts = () => {
    return (
        <Aux>
            <Navbar />
            <div className="base-wrapper">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="contactUs-Title">Frequently Asked Questions</h1>
                        <hr />
                        <h2 className="FAQ-subtitle">Why don't you allow comments on your posts?</h2>
                        <hr />
                    </div>
                </div>
                <div className="container">
                    <div className="support-wrapper">
                        <div className="col-md-8 pl-0 pr-0">
                            <h5 className="faq-label">Answer</h5>
                            <div className="text-section">
                                <p> The comment section is considered a place of activity for people who diligently embrace technology and love to share 
                                    their two cents about every topic they get a hand on. Therefore it often happens that anonymous trolls start posting
                                    unnecessary and unwarranted comments that require moderation. Instead of investing in hosting and moderating 
                                    comments, we prefer to focus on what we do best: fact-checking.
                                </p>
                                <p>If you want to commend us, rebuke us or give us constructive feedback on the work we are doing, 
                                    go to our <Link to="https://www.facebook.com/SURKHI.pk/">Facebook page</Link>, or <Link to="https://twitter.com/SURKHIpk">Tweet</Link> to us directly. We would be happy to hear from the audience!
                                </p>
                            </div>
                            <div className="mt-5 mb-5">
                                <button type="button "className="btn Faq-button"><Link to="/faqs">Go back to FAQs</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </Aux>   
    );
}

class FaqComponents extends Component 
{
    constructor(props){
        super(props);
        this.state = {id: undefined}
    }
    componentDidMount(){
        this.setState({id: this.props.match.params.topicId})
    }

    checkcondition = (props) => {
        let component = null;
        console.log("THE ID:", this.state.id);
        if(this.state.id === "submit-topic-to-fact-check")
            component = <SubmitTopicQuestion />;
        else if(this.state.id === "surkhi-fact-checking-process")
            component = <SurkhiProcess />
        else if(this.state.id === "accepting-guest-posting")
            component = <AcceptingGuestPost />
        else if(this.state.id === "decide-topic-fact-check")
            component = <DecideTopicFactCheck />
        else if(this.state.id === "about-surkhi-meter")
            component = <AboutSurkhiMeter />
        else if(this.state.id === "surkhi-definition")
            component = <SurkhiDefinition />
        else if(this.state.id === "is-surkhi-partisan")
            component = <IsSurkhiPartisan />
        else if(this.state.id === "typo-in-surkhi-post")
            component = <TypoInSurkhiPost />
        else if(this.state.id === "subscribe-to-newsletter")
            component = <SubscribeToNewsLetter />
        else if(this.state.id === "reproducing-content-on-another-website")
            component = <ReproducingContent />
        else if(this.state.id === "displaying-links-on-external-website")
            component = <DisplayingLinksOnWebsite />
        else if(this.state.id === "allowing-comments-on-posts")
            component = <AllowingCommentsOnPosts />
        else
            component = null;
        return component;
    }
    
    render(){
        return this.checkcondition(this.props);
    }
    
}


export default FaqComponents;
