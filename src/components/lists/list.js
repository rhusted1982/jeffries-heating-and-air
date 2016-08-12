import React, {PropTypes} from 'react';

const List = (props) => {
    let items = [];
    if(!props.size || props.size === 'all')
        items = props.items;
    else if(parseInt(~~Number(props.size)))
        items = props.items.splice(0, ~~Number(props.size));
    return(<div>{items.map(item => props.render(item))}</div>);
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
    size: PropTypes.string
};

export default List;