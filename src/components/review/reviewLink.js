import React, {PropTypes} from 'react';
import Link from '../controls/link';

const ReviewLink = (props) => {
    return(<Link to="/review" icon="fa-star" text={props.text} />);
};

ReviewLink.propTypes = {
    text: PropTypes.string.isRequired
};

export default ReviewLink;