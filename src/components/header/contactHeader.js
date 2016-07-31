import React, {PropTypes} from 'react';

const ContactHeader = (props) => {
    return (
        <div className="col-sm-12 container-fluid">
            <div className="row">
                <span style={{color: 'blue', fontSize: 'large', fontWeight: 'bold'}}>Service 24/7!   Contact Us Today!</span>
            </div>
            <div className="row">
                <span style={{fontSize: 'large'}}>{props.phoneNumber}</span>
                <span style={{color: 'blue', fontSize: 'x-large'}}>|</span>
                <span style={{fontSize: 'large'}}>{props.email}</span>
                <a href={props.facebook}><i className="fa fa-facebook-square fa-2x pull-right" aria-hidden="true"></i></a>
            </div>
        </div>
    );
};

ContactHeader.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired
};

export default ContactHeader;