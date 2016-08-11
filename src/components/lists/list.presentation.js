import React, {PropTypes} from 'react';
import ItemsPresentation from './items.presentation';

class ListPresentation extends ItemsPresentation {

    render() {
        return(<div>{this.getRenderedItems()}</div>);
    }
}

ListPresentation.propTypes = {
    items: PropTypes.array.isRequired,
    itemRender: PropTypes.func.isRequired,
    size: PropTypes.string
};

export default ListPresentation;