import React from 'react';
import Review from './review';
import TitleDiv from './../common/titleDiv';

const Reviews = () => {
    return (
        <div className="reviews">
            <TitleDiv title="Reviews" />
            <Review comment="I think this is just the most amazing site. I really love it. Highly recommend." name="Richard Husted" side="left"/>
            <br />
            <Review comment="I think this is just the most amazing site. I really love it. Highly recommend." name="Richard Husted" side="right"/>
            <br />
            <Review comment="I think this is just the most amazing site. I really love it. Highly recommend." name="Richard Husted" side="left"/>
        </div>
    );
};

export default Reviews;