import React, {PropTypes} from 'react';
import Slider from 'react-slick';
import ItemsPresentation from './items.presentation';

class SliderPresentation extends ItemsPresentation {

    render() {
        return(<Slider {...this.props.settings}>{this.getRenderedItems()}</Slider>);
    }
}

SliderPresentation.propTypes = {
    items: PropTypes.array.isRequired,
    itemRender: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    size: PropTypes.string
};

export default SliderPresentation;