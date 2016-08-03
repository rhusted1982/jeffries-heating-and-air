import React from 'react';
import TitleDiv from './../common/titleDiv';
import DealData from '../../data/deal';
import Deal from './deal';

const Deals = () => {
    let deals = [];
    DealData.forEach(element => {
        deals.push(<Deal image={element.image} />);
    });
    return (
        <div className="deals">
            <TitleDiv title="deals"/>
            {deals}
        </div>
    );
};

export default Deals;