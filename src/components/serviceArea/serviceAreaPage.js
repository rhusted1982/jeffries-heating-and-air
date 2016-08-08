import React, {PropTypes} from 'react';

const ServiceAreaPage = (props) => {
    let GeolocateButton = <button className="btn btn-primary" onClick={props.onGeolocateClick}>Use Current Location</button>;
    if(!props.canGeolocate) {
        GeolocateButton = <button className="btn btn-primary disabled" disabled>Geolocation not supported</button>;
    }
    return (
        <div className="ServiceAreaPage">
            {GeolocateButton}
        </div>
    );
};

ServiceAreaPage.propTypes = {
    canGeolocate: PropTypes.bool.isRequired,
    onGeolocateClick: PropTypes.func.isRequired
};

export default ServiceAreaPage;