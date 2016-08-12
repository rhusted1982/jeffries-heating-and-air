import React from 'react';
import Slider from '../lists/slider';
import Data from './review.data';
import Detail from './reviewDetail';

class ReviewSlider extends React.Component {

    itemRender(review) {
        const name = review.name ? review.name : 'Anonymous';
        return (<div>
            <Detail comment={review.comment} name={name} />
        </div>);
    }

    render() {
        return (<Slider
            items={Data.reviews}
            render={this.itemRender}
            settings={{
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
        />);
    }
}

export default ReviewSlider;