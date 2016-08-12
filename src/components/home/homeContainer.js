import React from 'react';
import Home from './home';
import Working from '../working/working';

class HomeContainer extends React.Component {

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
        const phoneNumber = '16063032233';
        let content = <Home setWorking={this.setWorking} phoneNumber={phoneNumber} />;
        if(this.state.working === true) {
            content = <Working label="checking location"/>;
        }
        return (content);
    }
}

export default HomeContainer;