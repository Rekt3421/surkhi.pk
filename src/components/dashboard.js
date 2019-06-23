import React, { Component } from "react";
import Modal from './modal';

class Dashboard extends Component {
    state = { show: false };

    showModal = () => {
    this.setState({ show: true });
    };

    hideModal = () => {
    this.setState({ show: false });
    };

    render() {
    return (
        <div>
            <Modal className="the-modal" show={this.state.show} handleClose={this.hideModal}>
                <p className="modal-details">If you have any interesting projects that you want to quickly bootstrap. Hit us a quick enquiry! </p>
                    <div>
                        <textarea className="enquiry-text" placeholder="Write your enquiry here..." ></textarea>
                        <input className="enquiry-email" type="email" placeholder="Your Email Address" ngModel name="email" required email />
                    </div>
            </Modal> 
            <div className="cube" onClick={this.showModal}>
                <span className="side top">Contact US!</span>
                <span className="side front">Want to know more details?</span>
            </div>
        </div>
    );
    }
}

export default Dashboard;