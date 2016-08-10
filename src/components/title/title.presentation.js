import React, {PropTypes} from 'react';

const TitlePresentation = (props) => {
    return (
        <div className="title">
            <h3>{props.title.toLocaleUpperCase()}</h3>
        </div>
    );
};

TitlePresentation.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitlePresentation;