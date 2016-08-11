import React, {PropTypes} from 'react';

const DealDetailPresentation = (props) => {
    return (
        <div className="deal">
            <img className="img-responsive img-rounded" src={props.image} />
        </div>
    );
};

DealDetailPresentation.propTypes = {
    image: PropTypes.string.isRequired
};

export default DealDetailPresentation;