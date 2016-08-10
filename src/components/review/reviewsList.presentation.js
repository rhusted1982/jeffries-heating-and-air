import React, {PropTypes} from 'react';
import Review from './review.presentation';
import Title from './../title/title.presentation';

const ReviewsListPresentation = (props) => {
    let left = true;
    let reviews = [];
    props.reviews.forEach(element => {
        const name = element.name ? element.name : 'Anonymous';
        const side = left ? 'left' : 'right';
        left = !left;
        reviews.push(<Review comment={element.comment} name={name} side={side} />);
    });
    return (
        <div className="reviews">
            <Title title="reviews" />
            {reviews}
        </div>
    );
};

ReviewsListPresentation.propTypes = {
    reviews: PropTypes.array.isRequired
};

export default ReviewsListPresentation;