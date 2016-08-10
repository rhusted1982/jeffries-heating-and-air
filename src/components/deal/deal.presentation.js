import React, {PropTypes} from 'react';

const DealPresentation = (props) => {
    return (
        <div className="deal">
            <img className="img-responsive img-rounded" src={require('./../../images/'+props.image)} />
        </div>
    );
};

DealPresentation.propTypes = {
    image: PropTypes.string.isRequired
};

export default DealPresentation;