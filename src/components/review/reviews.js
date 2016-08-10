import React from 'react';
import Review from './review';
import TitlePage from './../title/titlePage';
import ReviewData from '../../data/review';

const Reviews = () => {
    let left = true;
    let reviews = [];
    ReviewData.forEach(element => {
        const name = element.name ? element.name : 'Anonymous';
        const side = left ? 'left' : 'right';
        left = !left;
        reviews.push(<Review comment={element.comment} name={name} side={side} />);
    });
    return (
        <div className="reviews">
            <TitlePage title="reviews" />
            {reviews}
        </div>
    );
};

export default Reviews;