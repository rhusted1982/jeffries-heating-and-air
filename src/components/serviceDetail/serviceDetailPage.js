import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ServiceDetailPage = (props) => {
    let GeolocateButton = <button className="btn btn-primary" onClick={props.onGeolocateClick}><i className="fa fa-map-marker pull-left" aria-hidden="true"></i>Use Current Location</button>;
    if(!props.canGeolocate) {
        GeolocateButton = <button className="btn btn-primary disabled" disabled><i className="fa fa-map-marker pull-left" aria-hidden="true"></i>Geolocating not supported</button>;
    }
    let label = '';
    if(props.inServiceArea === true) {
        label = 'You are in the service area!';
    } else if(props.inServiceArea === false) {
        label = 'You are not in the service area!';
    }
    return (
        <div className="serviceDetailPage">
            <h4>{label}</h4>
            {GeolocateButton}
            <div className="footer">
                <Link to="/" className="btn btn-primary"><i className="fa fa-arrow-left pull-left" aria-hidden="true"></i>Go Back</Link>
            </div>
        </div>
    );
};

ServiceDetailPage.propTypes = {
    canGeolocate: PropTypes.bool.isRequired,
    onGeolocateClick: PropTypes.func.isRequired,
    inServiceArea: PropTypes.bool.isRequired
};

export default ServiceDetailPage;