import React, {PropTypes} from 'react';

const ContactHeader = (props) => {
    return (
        <div className="contactHeader">
            <div className="row">
                <div className="col-xs-5 centered">
                    <span className="caption">Contact Us Today!</span>
                </div>
                <div className="col-xs-5">
                    <div className="row">
                        <span className="info">{props.phoneNumber}</span>
                    </div>
                    <div className="row">
                        <span className="info">{props.email}</span>
                    </div>
                </div>
                <div className="col-xs-2 centered">
                    <a href={props.facebook}><i className="fa fa-facebook-square fa-5x pull-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <hr />
        </div>
    );
};

ContactHeader.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired
};

export default ContactHeader;