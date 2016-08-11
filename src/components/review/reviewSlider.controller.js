import React from 'react';
import SliderController from '../lists/slider.presentation';
import Data from './review.data';
import Detail from './reviewDetail.presentation';

class ReviewSliderController extends SliderController {

    itemRender(review) {
        const name = review.name ? review.name : 'Anonymous';
        return (<div>
            <Detail comment={review.comment} name={name} />
        </div>);
    }

    render() {
        return (<SliderController
            items={Data.reviews}
            itemRender={this.itemRender}
            settings={{
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
        />);
    }
}

export default ReviewSliderController;