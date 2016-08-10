import React, {PropTypes} from 'react';
import Review from './review.presentation';
import Title from './../title/title.presentation';

const ReviewsCarouselPresentation = (props) => {
    let reviews = [];
    let itemClassName = "item active";
    props.reviews.forEach(element => {
        const name = element.name ? element.name : 'Anonymous';
        reviews.push((
            <div className={itemClassName}>
                <Review comment={element.comment} name={name} />
            </div>));
        itemClassName = 'item';
    });
    return (
        <div className="reviews">
            <Title title="reviews" />
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {reviews}
                </div>
            </div>
        </div>
    );
};

ReviewsCarouselPresentation.propTypes = {
    reviews: PropTypes.array.isRequired
};

export default ReviewsCarouselPresentation;