import React, {PropTypes} from 'react';
import Home from './home.presentation';
import Working from './../working/working.presentation';

class HomeController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            working: false
        };
        this.setWorking = this.setWorking.bind(this);
    }

    setWorking(value) {
        this.setState({working: value});
    }

    render() {
        let content = <Home setWorking={this.setWorking} phoneNumber={this.props.phoneNumber} />;
        if(this.state.working === true) {
            content = <Working label="checking location"/>;
        }
        return (content);
    }
}

HomeController.propTypes = {
    phoneNumber: PropTypes.string.isRequired
};

export default HomeController;