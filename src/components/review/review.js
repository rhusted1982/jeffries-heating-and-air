import React, {PropTypes} from 'react';
import Title from '../title/title';
import Link from './reviewLink';
import List from './reviewList';

const Review = (props) => {
    return (
        <div className="review">
            <Title title="Reviews" />
            <br />
            <List size={props.size} />
            <br />
            <Link text="See More Reviews"/>
        </div>
    );
};

Review.propTypes = {
    size: PropTypes.string
};

export default Review;