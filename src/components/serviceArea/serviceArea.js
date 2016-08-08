import React from 'react';
import ServiceAreaPage from './serviceAreaPage';
import $ from 'jquery';

class ServiceArea extends React.Component
{
    constructor() {
        super();
        this.state = {
            canGeolocate: navigator.geolocation != undefined,
            working: false
        };
        this.onGeolocateClick.bind(this);
    }
    onGeolocateClick() {
        navigator.geolocation.getCurrentPosition(function (position) {
            $.ajax({
                url: `/geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
                type: 'post'
            });
        });
    }

    render() {
        return (
            <div className="serviceArea">
                <ServiceAreaPage canGeolocate={this.state.canGeolocate} onGeolocateClick={this.onGeolocateClick} />
            </div>
        );
    }    
}

export default ServiceArea;