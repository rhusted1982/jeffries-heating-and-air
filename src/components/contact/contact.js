import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import ContactPage from './contactPage';
import $ from 'jquery';
import toastr from 'toastr';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {
                email: '',
                phoneNumber: '',
                name: '',
                reason: ''
            },
            errors: {
                email: '',
                phoneNumber: '',
                name: '',
                reason: ''
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
        if(!this.setErrors()) {
            $.post('/contact');
            browserHistory.push('/');
            toastr.success('Message sent!');
        }
    }

    setErrors() {
        const info = this.state.info;
        let errors = {
            email: '',
            phoneNumber: '',
            name: '',
            reason: '',
        };
        let hasErrors = false;
        if(!info.name) {
            errors.name = 'Please let us know your name.';
            hasErrors = true;
        }
        if(!info.email && !info.phoneNumber) {
            errors.email = errors.phoneNumber = 'Please let us know how to get in touch with you.';
            hasErrors = true;
        }
        if(!info.reason) {
            errors.reason = 'Please specify the reason you are contacting us.';
            hasErrors = true;
        }
        this.setState({errors: errors});
        return hasErrors;
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