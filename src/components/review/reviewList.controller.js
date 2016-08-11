import React, {PropTypes} from 'react';
import ListController from '../lists/list.presentation';
import Data from './review.data';
import Detail from './reviewDetail.presentation';

class ReviewListController extends ListController {

    constructor() {
        super();
        this.left = true;
        this.itemRender = this.itemRender.bind(this);
    }
    itemRender(review) {
        const name = review.name ? review.name : 'Anonymous';
        const side = this.left ? 'left' : 'right';
        this.left = !this.left;
        return <Detail comment={review.comment} name={name} side={side} />;
    }

    render() {
        return(<ListController items={Data.reviews} itemRender={this.itemRender} size={this.props.size}/>);
    }
}

ReviewListController.propTypes = {
    size: PropTypes.string
};

export default ReviewListController;