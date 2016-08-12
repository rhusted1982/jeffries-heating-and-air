import React, {PropTypes} from 'react';
import Link from '../controls/link';

const DealLink = (props) => {
    return(<Link to="/deal" icon="fa-usd" text={props.text} />);
};

DealLink.propTypes = {
    text: PropTypes.string.isRequired
};

export default DealLink;