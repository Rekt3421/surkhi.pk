import React from 'react';
import '../assets/stylesheets/services.scss';

const ServiceBlockLeft = (props) => {
    return(
        <div className="row no-margin">
            <div className="col-6 service-colored-section">
                <div className="service-icon">
                    <img src={props.image} alt={props.altTag} />
                </div>
                <h3 className="icon-heading">{props.name}</h3>
            </div>
            <div className="col-6 service-desc-section">
                <h4 className="service-heading">{props.serviceHeading}</h4>
                <p className="service-writeup">{props.description}
                </p>
            </div>
        </div>
    );
}

const ServiceBlockRight = (props) => {
    return(
        <div className="row no-margin">
            <div className="col-6 service-desc-section">
                <h4 className="service-heading">{props.serviceHeading}</h4>
                <p className="service-writeup">{props.description}
                </p>
            </div>
            <div className="col-6 service-colored-section">
                <div className="service-icon">
                    <img src={props.image} alt={props.altTag}/>
                </div>
                <h3 className="icon-heading">{props.name}</h3>
            </div>
        </div>
    );
}


export { ServiceBlockLeft, ServiceBlockRight };
