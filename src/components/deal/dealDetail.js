import React, {PropTypes} from 'react';

const DealDetail = (props) => {
    return (
        <div className="deal">
            <img className="img-responsive img-rounded" src={props.image} />
        </div>
    );
};

DealDetail.propTypes = {
    image: PropTypes.string.isRequired
};

export default DealDetail;