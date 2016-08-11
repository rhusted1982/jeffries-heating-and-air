import React from 'react';
import Slider from './reviewSlider.controller';
import Title from './../title/title.presentation';

const ReviewPage = () => {
    return(
        <div>
            <Title title="reviews" />
            <Slider/>
        </div>
    );
};

export default ReviewPage;