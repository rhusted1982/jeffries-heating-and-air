import React from 'react';
import Slider from './dealSlider';
import Title from '../title/title';

const DealPage = () => {
    return(
        <div>
            <Title title="deals" />
            <Slider/>
        </div>
    );
};

export default DealPage;