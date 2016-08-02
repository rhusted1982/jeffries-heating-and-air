import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import ContactPage from './contactPage';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {
                email: '',
                phoneNumber: '',
                name: '',
                reason: '',
                message: ''
            },
            errors: {
                email: '',
                phoneNumber: '',
                name: '',
                reason: '',
                message: ''
            }
        };
        this.changeInfo = this.changeInfo.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
    }

    changeInfo(event) {
        let info = this.state.info;
        info[event.target.name] = event.target.value;
        this.setState({info : info});
    }

    sendInfo(event) {
        event.preventDefault();
        browserHistory.push('/');
    }

    render() {
        return (
          <div className="contact">
              <ContactPage info={this.state.info} errors={this.state.errors} onChange={this.changeInfo} phoneNumber={this.props.phoneNumber} onSubmit={this.sendInfo} />
          </div>
        );
    }
}

Contact.propTypes = {
    phoneNumber: PropTypes.string.isRequired
};

export default Contact;