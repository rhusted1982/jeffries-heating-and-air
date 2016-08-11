import React from 'react';
import Title from './../title/title.presentation';
import Link from './dealLink.presentation';

const DealPresentation = () => {
    return (
        <div className="deal">
            <Title title="Deals" />
            <br />
            <Link text="See All Deals"/>
        </div>
    );
};

export default DealPresentation;