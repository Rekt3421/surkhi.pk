import React, {Component} from 'react';
import '../../assets/stylesheets/App.scss';
import SurkhiLogo from '../../assets/images/surkhi-meter-nav.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <header className='header-style'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><img src={SurkhiLogo} alt="Surkhi Logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="inside-nav">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <button className="btn submitTopic">
                                    <Link to="/submit-topic">Submit a Topic</Link>
                                </button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faqs">FAQs</Link>
                            </li>
                        </ul>

                        <div id="circ">
                            <ul>
                                <li className="animated zoomIn">
                                <a href="https://www.instagram.com/surkhi.pk/" target="_blank" rel="noopener noreferrer">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                </a>
                                </li>
                                <li className="animated zoomIn delayone">
                                <a href="https://twitter.com/surkhipk" target="_blank" rel="noopener noreferrer">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                </a>
                                </li>
                                <li className="animated zoomIn delaytwo">
                                <a href="https://www.facebook.com/SURKHI.pk/" target="_blank" rel="noopener noreferrer">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookF} />    
                                    </div>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
                
            // </BrowserRouter>
        );
    }
}

export default Navbar;