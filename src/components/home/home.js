import React from 'react';
import HomePage from './homePage';
import WorkingPage from './../working/workingPage';

class Home extends React.Component {

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
        let content = <HomePage setWorking={this.setWorking} />;
        if(this.state.working === true) {
            content = <WorkingPage label="checking location"/>;
        }
        return (content);
    }
}

export default Home;