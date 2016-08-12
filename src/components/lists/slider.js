import React, {PropTypes} from 'react';
import SlickSlider from 'react-slick';
import spliceAndRender from './spliceAndRender';

const Slider = (props) => {
    return(<SlickSlider {...props.settings}>{spliceAndRender(props.items, props.render, props.size)}</SlickSlider>);
};

Slider.propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    size: PropTypes.string
};

export default Slider;