import React, {PropTypes} from 'react';

const Deal = (props) => {
    return (
        <div className="deal">
            <img className="img-responsive img-rounded" src={require('./../../images/'+props.image)} />
        </div>
    );
};

Deal.propTypes = {
    image: PropTypes.string.isRequired
};

export default Deal;