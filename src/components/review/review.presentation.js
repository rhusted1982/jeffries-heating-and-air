import React, {PropTypes} from 'react';
import Title from './../title/title.presentation';
import Link from './reviewLink.presentation';
import List from './../review/reviewList.controller';

const ReviewPresentation = (props) => {
    return (
        <div className="review">
            <Title title="Reviews" />
            <br />
            <List size={props.size} />
            <br />
            <Link text="See More Reviews"/>
        </div>
    );
};

ReviewPresentation.propTypes = {
    size: PropTypes.string
};

export default ReviewPresentation;