import React, {PropTypes} from 'react';

const TitleDiv = (props) => {
    return (
        <div className="titleDiv">
            <h3>{props.title.toLocaleUpperCase()}</h3>
        </div>
    );
};

TitleDiv.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleDiv;