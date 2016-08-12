import React, {PropTypes} from 'react';
import SlickSlider from 'react-slick';

const Slider = (props) => {
    let items = [];
    if(!props.size || props.size === 'all')
        items = props.items;
    else if(parseInt(~~Number(props.size)))
        items = props.items.splice(0, ~~Number(props.size));
    return(<SlickSlider {...props.settings}>{items.map(item => props.render(item))}</SlickSlider>);
};

Slider.propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    size: PropTypes.string
};

export default Slider;