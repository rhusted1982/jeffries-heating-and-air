import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LinkPresentation = (props) => {
    return(<Link to={props.to} className="btn btn-primary"><i className={`fa ${props.icon} pull-left`} aria-hidden="true"></i>{props.text}</Link>);
};

LinkPresentation.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default LinkPresentation;