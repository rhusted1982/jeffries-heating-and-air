import React, {PropTypes} from 'react';

const ServiceAreaPage = (props) => {
    let GeolocateButton = <button className="btn btn-primary" onClick={props.onGeolocateClick}>Use Current Location</button>;
    if(!props.canGeolocate) {
        GeolocateButton = <button className="btn btn-primary disabled" disabled>Geolocating not supported!</button>;
    }
    let label = '';
    if(props.inServiceArea === true) {
        label = 'You are in the service area!';
    } else if(props.inServiceArea === false) {
        label = 'You are not in the service area!';
    }
    return (
        <div className="ServiceAreaPage">
            <h4>{label}</h4>
            {GeolocateButton}
        </div>
    );
};

ServiceAreaPage.propTypes = {
    canGeolocate: PropTypes.bool.isRequired,
    onGeolocateClick: PropTypes.func.isRequired,
    inServiceArea: PropTypes.bool.isRequired
};

export default ServiceAreaPage;