import React, {PropTypes} from 'react';
import Data from './review.data';
import ReviewsList from './reviewsList.presentation';
import ReviewsSlider from './reviewsSlider.presentation';

class ReviewController extends React.Component {

    parseCount(count) {
        if(!count || count === 'all') {
            return 'all';
        } else if(parseInt(~~Number(count))) {
            return ~~Number(count);
        }
        return 0;
    }

    getReviewData(count) {
        let useCount = this.parseCount(count);
        let reviews = [];
        Data.reviews.forEach((element, index) => {
            if(useCount !== 'all' && index >= useCount) {
                return false;
            } else {
                reviews.push(element);
            }
        });
        return reviews;
    }

    render() {
        const layout = this.props.layout || 'vertical';
        const reviews = this.getReviewData(this.props.count);
        let content = <ReviewsList reviews={reviews} />;
        if(layout === 'horizontal') {
            content = <ReviewsSlider reviews={reviews}/>;
        }
        return (content);
    }
}

ReviewController.propTypes = {
    layout: PropTypes.string,
    count: PropTypes.string
};

export default ReviewController;