import React, {PropTypes} from 'react';

class ItemsPresentation extends React.Component {

    constructor() {
        super();
        if(this.constructor === ItemsPresentation)
            throw new TypeError('Cannot instantiate the ItemsPresentation abstract class.');
    }

    parseSize() {
        if (!this.props.size || this.props.size === 'all')
            return 'all';
        else if (parseInt(~~Number(this.props.size)))
            return ~~Number(this.props.size);
        return 0;
    }

    getRenderedItems() {
        let size = this.parseSize();
        let items = [];
        this.props.items.forEach((item, index) => {
            if (size !== 'all' && index >= size)
                return false;
            else
                items.push(this.props.itemRender(item));
        });
        return items;
    }
}

ItemsPresentation.propTypes = {
    items: PropTypes.array.isRequired,
    itemRender: PropTypes.func.isRequired,
    size: PropTypes.string
};

export default ItemsPresentation;