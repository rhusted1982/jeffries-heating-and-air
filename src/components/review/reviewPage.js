import React from 'react';
import Slider from './reviewSlider';
import Title from '../title/title';

const ReviewPage = () => {
    return(
        <div>
            <Title title="reviews" />
            <Slider/>
        </div>
    );
};

export default ReviewPage;