import React, {PropTypes} from 'react';
import Title from '../title/title';

const Service = (props) => {
    let services = [];
    props.services.forEach(element => {
        services.push(<li><h5>{element}</h5></li>);
    });
    let GeolocateButton = <button className="btn btn-primary" onClick={props.onGeolocateClick}><i className="fa fa-map-marker pull-left" aria-hidden="true"></i>Check Current Location</button>;
    if(!props.canGeolocate) {
        GeolocateButton = <button className="btn btn-primary disabled" disabled><i className="fa fa-map-marker pull-left" aria-hidden="true"></i>Geolocating not supported</button>;
    }
    return (
        <div className="service">
            <Title title="services"/>
            <p>We offer a range of services including but not limited to:</p>
            <ul>
                {services}
            </ul>
            <br />
            <p>We are a locally owned and operated from Somerset and proudly serve south central Kentucky.</p>
            <p>We are open <strong>24 HOURS A DAY</strong> and <strong>7 DAYS A WEEK</strong>.</p>
            <br />
            <h4>Check to see if you are in our service area!</h4>
            {GeolocateButton}
        </div>
    );
};

Service.propTypes = {
    services: PropTypes.array.isRequired,
    canGeolocate: PropTypes.bool.isRequired,
    onGeolocateClick: PropTypes.func.isRequired
};

export default Service;