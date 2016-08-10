import React, {PropTypes} from 'react';
import ServicePage from './servicePage';
import ServiceData from './../../data/service';
import toastr from 'toastr';
import $ from 'jquery';

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canGeolocate: navigator.geolocation != undefined
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
                                if(result) {
                                    toastr.success('Congratulations, Jeffries Heating and Air serves your location!');
                                } else {
                                    toastr.success('Unfortunately you are not in our service area.');
                                }
                            } else {
                                toastr.error('Failed to check location!');
                            }
                            this.props.setWorking(false);
                        }.bind(this), 1000);
                    }.bind(this)
                });
                this.props.setWorking(true);
            }.bind(this),
            function () {
                this.setState({canGeolocate: false});
            }.bind(this));
    }

    render() {
        return (<ServicePage services={ServiceData} canGeolocate={this.state.canGeolocate} onGeolocateClick={this.geolocateClick}/>);
    }
}

Service.propTypes = {
    setWorking: PropTypes.func.isRequired
};

export default Service;