import React, {PropTypes} from 'react';

const TitlePage = (props) => {
    return (
        <div className="title">
            <h3>{props.title.toLocaleUpperCase()}</h3>
        </div>
    );
};

TitlePage.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitlePage;