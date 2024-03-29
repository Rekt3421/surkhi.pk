import React from 'react';
import '../assets/stylesheets/services.scss';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <div className="modal-header">
                <h4 className="modal-title">Surkhi Enquiry</h4>
                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            {children}

            <div className="modal-footer-1">
                <button type="button" className="btn btn-light submit-btn" onClick="modal.close('Close click')">Submit</button>
            </div>
        </div>
    );
};

export default React.memo(Modal); //React.memo optimizes components that need not be rendered continuously


// When to use memo? 
// If parent changes are to be reflected on children, then we should not use memo on those children