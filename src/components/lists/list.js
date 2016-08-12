import React, {PropTypes} from 'react';
import spliceAndRender from './spliceAndRender';

const List = (props) => {

    return(<div>{spliceAndRender(props.items, props.render, props.size)}</div>);
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
    size: PropTypes.string
};

export default List;