import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import LinkButton from '../common/linkButton';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="row">
                <LinkButton label="Call Us" href={'tel:'+ props.phoneNumber} />
                <Link to="/contact" className="btn btn-primary">Send Us a Message</Link>
            </div>
        </div>
    );
};

Footer.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
};

export default Footer;