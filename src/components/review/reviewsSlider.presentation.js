import React, {PropTypes} from 'react';
import Slider from 'react-slick';
import Review from './review.presentation';
import Title from './../title/title.presentation';

const ReviewsSliderPresentation = (props) => {
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
            <Slider>
                {reviews}
            </Slider>
        </div>
    );
};

ReviewsSliderPresentation.propTypes = {
    reviews: PropTypes.array.isRequired
};

export default ReviewsSliderPresentation;