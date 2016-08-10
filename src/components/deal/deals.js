import React from 'react';
import TitlePage from './../title/titlePage';
import DealData from '../../data/deal';
import Deal from './deal';

const Deals = () => {
    let deals = [];
    DealData.forEach(element => {
        deals.push(<Deal image={element.image} />);
    });
    return (
        <div className="deals">
            <TitlePage title="deals"/>
            {deals}
        </div>
    );
};

export default Deals;