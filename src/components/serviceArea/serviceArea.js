import React from 'react';
import ServiceAreaPage from './serviceAreaPage';
import $ from 'jquery';
import toastr from 'toastr';
import WorkingPage from './../common/workingPage';

class ServiceArea extends React.Component
{
    constructor() {
        super();
        this.state = {
            canGeolocate: navigator.geolocation != undefined,
            working: false
        };
        this.geolocateClick = this.geolocateClick.bind(this);
    }
    geolocateClick(event) {
        event.preventDefault();
        let success = true;
        let result = false;
        navigator.geolocation.getCurrentPosition(
            function (position) {
                $.ajax({
                    url: `/geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
                    type: 'post',
                    success: function(response) {
                        result = response;
                    },
                    error: function () {
                        success = false;
                    },
                    complete: function () {
                        setTimeout(function () {
                            if(success) {
                                this.setState({locatedInServiceArea:result});
                            } else {
                                toastr.error('Failed to check location!');
                            }
                            this.setState({working: false});
                        }.bind(this), 1000);
                    }.bind(this)
                });
                this.setState({working: true});
            }.bind(this),
            function () {
                this.setState({canGeolocate: false});
            }.bind(this));
    }

    render() {
        let content = <ServiceAreaPage canGeolocate={this.state.canGeolocate} onGeolocateClick={this.geolocateClick} inServiceArea={this.state.locatedInServiceArea} />;
        if(this.state.working) {
            content = <WorkingPage label="Geolocating"/>;
        }
        return (
            <div className="serviceArea">
                {content}
            </div>
        );
    }    
}

export default ServiceArea;