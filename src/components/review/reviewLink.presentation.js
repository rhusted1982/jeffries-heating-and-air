import React, {PropTypes} from 'react';
import Link from '../controls/link.presentation';

const ReviewLinkPresentation = (props) => {
    return(<Link to="/review" icon="fa-star" text={props.text} />);
};

ReviewLinkPresentation.propTypes = {
    text: PropTypes.string.isRequired
};

export default ReviewLinkPresentation;