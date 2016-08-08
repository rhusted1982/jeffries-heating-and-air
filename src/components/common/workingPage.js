import React, {PropTypes} from 'react';

const WorkingPage = (props) => {
    return (
        <div className="workingPage">
            <div className="row">
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            </div>
            <div className="row">
                <h3>{props.label.toUpperCase()}</h3>
            </div>
        </div>
    );
};

WorkingPage.propTypes = {
    label: PropTypes.string.isRequired
};

export default WorkingPage;