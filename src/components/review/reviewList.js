import React, {PropTypes} from 'react';
import List from '../lists/list';
import Data from './review.data';
import Detail from './reviewDetail';

class ReviewList extends React.Component {

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
        return(<List items={Data.reviews} render={this.itemRender} size={this.props.size} />);
    }
}

ReviewList.propTypes = {
    size: PropTypes.string
};

export default ReviewList;