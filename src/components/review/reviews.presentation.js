import React from 'react';
import Review from './review.presentation';
import Title from './../title/title.presentation';
import Data from './review.data';

const ReviewsPresentation = () => {
    let left = true;
    let reviews = [];
    Data.reviews.forEach(element => {
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

export default ReviewsPresentation;