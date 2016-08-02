import React, {PropTypes} from 'react';

const LinkButton = (props) => {
    return (
        <div className="linkButton">
            <a className="btn btn-primary" href={props.href}>{props.label}</a>
        </div>
    );
};

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default LinkButton;