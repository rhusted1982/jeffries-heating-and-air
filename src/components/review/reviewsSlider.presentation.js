import React, {PropTypes} from 'react';
import Slider from 'react-slick';
import Review from './review.presentation';
import Title from './../title/title.presentation';

const ReviewsSliderPresentation = (props) => {
    let reviews = [];
    props.reviews.forEach(element => {
        const name = element.name ? element.name : 'Anonymous';
        reviews.push(<div><Review comment={element.comment} name={name} /></div>);
    });
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="reviews">
            <Title title="reviews" />
            <Slider {...settings}>
                {reviews}
            </Slider>
        </div>
    );
};

ReviewsSliderPresentation.propTypes = {
    reviews: PropTypes.array.isRequired
};

export default ReviewsSliderPresentation;