import React, {PropTypes} from 'react';

const WorkingPage = (props) => {
    return (
        <div className="workingPage">
            <br />
            <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            <h4>{props.label.toUpperCase()}</h4>
        </div>
    );
};

WorkingPage.propTypes = {
    label: PropTypes.string.isRequired
};

export default WorkingPage;