import React from 'react';
import '../App.scss';


const Footer = () => {
    const liStyle = {
        color: 'red'
    }
    return(
        <div class="footer-bottom">
            <div class="container">
                <div className="row">
                    <div class="col-md-6 col-sm-6 text-sm-left text-center">
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
        </div>
    );
}
export default Footer;