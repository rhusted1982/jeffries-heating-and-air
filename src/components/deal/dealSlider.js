import React from 'react';
import Slider from '../lists/slider';
import Data from './deal.data';
import Detail from './dealDetail';

class DealSlider extends React.Component {

    itemRender(deal) {
        return (<div>
            <Detail image={deal.image} />
        </div>);
    }

    render() {
        return (<Slider
            items={Data.deals}
            render={this.itemRender}
            settings={{
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
        />);
    }
}

export default DealSlider;