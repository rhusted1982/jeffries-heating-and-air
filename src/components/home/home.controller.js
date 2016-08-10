import React from 'react';
import Home from './home.presentation';
import Working from './../working/working.presentation';

class HomeController extends React.Component {

    constructor() {
        super();
        this.state = {
            working: false
        };
        this.setWorking = this.setWorking.bind(this);
    }

    setWorking(value) {
        this.setState({working: value});
    }

    render() {
        let content = <Home setWorking={this.setWorking} />;
        if(this.state.working === true) {
            content = <Working label="checking location"/>;
        }
        return (content);
    }
}

export default HomeController;