import React from 'react';
import Slider from './dealSlider.controller';
import Title from './../title/title.presentation';

const DealPage = () => {
    return(
        <div>
            <Title title="deals" />
            <Slider/>
        </div>
    );
};

export default DealPage;