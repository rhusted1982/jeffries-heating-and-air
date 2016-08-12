import React, {PropTypes} from 'react';

const Title = (props) => {
    return (
        <div className="title">
            <h3>{props.title.toLocaleUpperCase()}</h3>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;