import React from 'react';
import {Link} from 'react-router';
import ServiceData from './../../data/service';
import TitleDiv from './../common/titleDiv';

const Service = () => {
    let services = [];
    ServiceData.forEach(element => {
        services.push(<li><h5>{element}</h5></li>);
    });
    return (
        <div className="service">
            <TitleDiv title="services"/>
            <p>We offer a range of services including but not limited to:</p>
            <ul>
                {services}
            </ul>
            <br />
            <div>
                <Link to="/service" className="btn btn-primary"><i className="fa fa-graduation-cap pull-left" aria-hidden="true"></i>Learn More</Link>
            </div>
        </div>
    );
};

export default Service;