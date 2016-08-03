import React from 'react';
import About from './../about/about';
import Service from './../service/service';
import Deals from './../deal/deals';
import Reviews from './../review/reviews';

const Home = () => {
    return (
        <div className="home">
            <About />
            <hr />
            <Service />
            <hr />
            <Deals />
            <hr />
            <Reviews />
        </div>
    );
};

export default Home;