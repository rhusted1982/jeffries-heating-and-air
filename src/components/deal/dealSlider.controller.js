import React from 'react';
import SliderController from '../lists/slider.presentation';
import Data from './deal.data';
import Detail from './dealDetail.presentation';

class DealSliderController extends SliderController {

    itemRender(deal) {
        return (<div>
            <Detail image={deal.image} />
        </div>);
    }

    render() {
        return (<SliderController
            items={Data.deals}
            itemRender={this.itemRender}
            settings={{
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
        />);
    }
}

export default DealSliderController;