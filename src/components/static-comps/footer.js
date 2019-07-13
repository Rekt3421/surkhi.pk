import React from 'react';
import {Link} from 'react-router-dom';
import SurkhiLogo from '../../assets/images/surkhi-banner.png'
import '../../assets/stylesheets/static-comps.scss';



const Footer = () => {
    return(
        <footer class="footer-bottom">
            <div class="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="theme-brand">
                            <a href="/"><img src={SurkhiLogo} alt="Surkhi Logo" title="Surkhi.pk"/></a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="content-wrapper">
                            <div className="footer-list-content">
                                <div className="footer-item-company">
                                    <h6>Company</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to="/">About Surkhi</Link></li>
                                        <li><Link to="/support-us">Support Us</Link></li>
                                        <li><Link to="/insights">Terms of Use</Link></li>
                                        <li><Link to="/submit-topic">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-item-navigate">
                                <h6>Navigate</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/insights">Insights</Link></li>
                                        <li><Link to="/submit-topic">Submit a Topic</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-item-coming-soon">
                                <h6>Coming Soon</h6>
                                    <ul className="list-unstyled">
                                        <li>Membership</li>
                                        <li>Insights</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row thin-footer">
                    <div class="col-md-6 col-sm-6 text-sm-left text-center p-0">
                        <span className="copy-right-text">© 2019 <a href="https://codepen.io/anupkumar92">Surkhi</a> All Rights Reserved.</span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;