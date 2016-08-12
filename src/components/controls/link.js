import React, {PropTypes} from 'react';
import {Link as ReactLink} from 'react-router';

const Link = (props) => {
    return(<ReactLink to={props.to} className="btn btn-primary"><i className={`fa ${props.icon} pull-left`} aria-hidden="true"></i>{props.text}</ReactLink>);
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Link;