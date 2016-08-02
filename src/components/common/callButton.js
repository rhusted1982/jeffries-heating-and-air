import React, {PropTypes} from 'react';

const CallButton = (props) => {
    let label = 'Call Us';
    if(props.label) {
        label = props.label;
    }

    return (
        <div className="callButton">
            <a className="btn btn-primary" href={'tel:'+ props.phoneNumber}>{label}</a>
        </div>
    );
};

CallButton.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default CallButton;