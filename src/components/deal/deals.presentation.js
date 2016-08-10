import React from 'react';
import Title from './../title/title.presentation';
import Data from './deal.data';
import Deal from './deal.presentation';

const DealsPresentation = () => {
    let deals = [];
    Data.deals.forEach(element => {
        deals.push(<Deal image={element.image} />);
    });
    return (
        <div className="deals">
            <Title title="deals"/>
            {deals}
        </div>
    );
};

export default DealsPresentation;