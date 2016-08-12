import React from 'react';
import Title from '../title/title';
import Link from './dealLink';

const Deal = () => {
    return (
        <div className="deal">
            <Title title="Deals" />
            <br />
            <Link text="See All Deals"/>
        </div>
    );
};

export default Deal;