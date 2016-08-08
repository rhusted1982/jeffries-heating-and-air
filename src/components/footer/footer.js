import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="row">
                <a className="btn btn-primary" href={'tel:'+ props.phoneNumber}><i className="fa fa-phone pull-left" aria-hidden="true"></i>Call Us</a>
                <Link to="/contact" className="btn btn-primary"><i className="fa fa-envelope-o pull-left" aria-hidden="true"></i>Send Us a Message</Link>
            </div>
        </div>
    );
};

Footer.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
};

export default Footer;