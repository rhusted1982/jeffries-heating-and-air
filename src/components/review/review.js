import React, {PropTypes} from 'react';

const Review = (props) => {
    return (
        <div className="review">
            <div className={props.side}>
                <p className="speech-bubble">{props.comment}</p>
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-1">
                        <span className="speech-arrow" />
                    </div>
                    <div className="col-xs-2">
                        <i className="fa fa-user fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-6">
                        <p className="name">{props.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Review.propTypes = {
    comment: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired
};

export default Review;