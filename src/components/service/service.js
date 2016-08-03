import React from 'react';
import ServiceData from './../../data/service';
import {top} from './../../data/serviceArea';
import TitleDiv from './../common/titleDiv';

const Service = () => {
    let services = [];
    ServiceData.forEach(element => {
        services.push(<li><h5>{element}</h5></li>);
    });
    let serviceArea = [];
    top.forEach(element => {
        serviceArea.push(<li>{element}</li>);
    });
    serviceArea.push(<li>and Many More</li>);
    return (
        <div className="service">
            <TitleDiv title="services"/>
            <p>We offer a range of services including but not limited to</p>
            <ul>
                {services}
            </ul>
            <br />
            <div className="row">
                <div className="col-xs-6">
                    <img className="img-24-7 img-responsive" src={require('./../../images/24-7.png')} />
                </div>
                <div className="col-xs-6">
                    <h4>Service Area</h4>
                    <ul>
                        {serviceArea}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Service;