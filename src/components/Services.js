import React, {Component} from 'react'
import {ServiceBlockLeft, ServiceBlockRight} from './ServiceBlock';
import FactCheck from '../assets/images/fact-check.png';
import Research from '../assets/images/research-03.png';
import Analytics from '../assets/images/analytics-icon.png';
import Reporting from '../assets/images/investigative-reporting.png';
import './services.scss'

class Services extends Component{
    render(){
        return(
            <div className="wrapper">
                <ServiceBlockLeft 
                    image = {FactCheck}
                    altTag= 'Surkhi-Factcheck-icon' 
                    name = 'Fact Check' 
                    serviceHeading = 'Our Approach'
                    description = "Surkhi Meter is a subsidiary of Surkhi.pk. Our platform is dedicated to fact-checking news related to all things Pakistan. We take 
                    a skeptical stance to any dissiminated news or rumors that get published online or if they are making the rounds on social media 
                    circles. We use a state-of-the-art machine learning algorithm that backtracks a repository of archived news from multiple sources. 
                    Armed with evidence, data, and a non-partisan passion, we work to provide you the real picture."
                />
                <ServiceBlockRight 
                    image={Research} 
                    altTag = 'Surkhi-Research-icon'
                    name='Research' 
                    serviceHeading='How We Do Research'
                    description='Surkhi.pk puts research and evidence at the forefront of all our content. All materials used are cited to relevant and reputable 
                    sources of information, including government reports, press releases, research reports and publications, journals, articles, 
                    right-to-information requests. Surkhi Meter follows a similar approach, further accelerated by our algorithm and research unit.'
                />
                <ServiceBlockLeft 
                    image={Analytics} 
                    altTag = 'Surkhi-Analytics-icon'
                    name='Analytics' 
                    serviceHeading='Information is Power'
                    description="Surkhi Meter analyzes key mainstream and social media trends, as well as follow trend generation, narratives and popular accounts. 
                    We publish a monthly round-up detailing the nuts and bolts which move Pakistan' social media. We strongly believe that 
                    visualization is an integral part of any data analytics, hence we aim to empower our clients to immediately spot trends, 
                    identify outliers and exhibit meaningful information for ease of understanding."
                />
                <ServiceBlockRight 
                    image={Reporting}
                    altTag='Surkhi-Reporting-icon' 
                    name='Investigative Reporting' 
                    serviceHeading='Non-Partisan Authentic Reporting'
                    description='Surkhi Meter produces social media led visual and non-visual investigative reporting, while also using on-ground reports when 
                    needed. Our Investigative series follows important, but oft-ignored issues and are published after months of in-depth research.'
                />

                <section className="quote-section p-5">
                    <div className="container-fluid">
                    <div className="services-ask">
                        <h2>We have a multitude of services to choose from</h2>
                    </div>
                        <div className="cube" onClick="openVerticallyCentered(content)">
                        <span className="side top">Contact US!</span>
                        <span className="side front">Want to know more details?</span>
                        </div>
                        {
                        <div className="the-modal">
                        <div className="modal-header">
                            <h4 className="modal-title">Surkhi Enquiry</h4>
                            <button type="button" className="close" aria-label="Close" onClick="modal.dismiss('Cross click')">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="modal-details">If you have any interesting projects that you want to quickly bootstrap. Hit us a quick enquiry! </p>
                            <div>
                            <textarea className="enquiry-text" placeholder="Write your enquiry here..." ></textarea>
                            <input className="enquiry-email" type="email" placeholder="Your Email Address" ngModel name="email" required email />
                        </div>
                        </div>
                        <div className="modal-footer-1">
                            <button type="button" className="btn btn-light submit-btn" onClick="modal.close('Close click')">Submit</button>
                        </div>
                        </div>
                        }
                    
                    </div>
                </section>
            </div>
        );
    }
}

export default Services;