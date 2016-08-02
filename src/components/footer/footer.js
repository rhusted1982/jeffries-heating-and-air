import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CallButton from './../common/callButton';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="row">
                <CallButton phoneNumber={props.phoneNumber} />
                <Link to="/contact" className="btn btn-primary">Send Us a Message</Link>
            </div>
        </div>
    );
};

Footer.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
};

export default Footer;