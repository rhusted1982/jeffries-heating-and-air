import React, {PropTypes} from 'react';

const Working = (props) => {
    return (
        <div className="working">
            <br />
            <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            <h4>{props.label.toUpperCase()}</h4>
        </div>
    );
};

Working.propTypes = {
    label: PropTypes.string.isRequired
};

export default Working;