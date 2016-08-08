import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import ContactPage from './contactPage';
import $ from 'jquery';
import toastr from 'toastr';
import WorkingPage from './../common/workingPage';
import validator from 'validator';
import phone from 'phone';

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
            },
            working: false
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
        let success = true;
        if(!this.setErrors()) {
            $.ajax({
                url: '/contact',
                data: JSON.stringify(this.state.info),
                contentType: 'application/json',
                type: 'post',
                error: function() {
                    success = false;
                },
                complete: function() {
                    if(success) {
                        setTimeout(function () {
                            browserHistory.push('/');
                            toastr.success('Message sent!');
                        }, 1000);
                    } else {
                        setTimeout(function () {
                            this.setState({working: false});
                            toastr.error('Message failed to send!');
                        }.bind(this), 1000);
                    }
                }.bind(this)
            });
            this.setState({working: true});
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
        if(!info.reason) {
            errors.reason = 'Please specify the reason you are contacting us.';
            hasErrors = true;
        }
        if(!info.email && !info.phoneNumber) {
            errors.email = errors.phoneNumber = 'Please let us know how to get in touch with you.';
            hasErrors = true;
        }
        if(info.email && !validator.isEmail(info.email)) {
            errors.email = 'Please specify a valid email.';
            hasErrors = true;
        }
        if(info.phoneNumber && !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.exec(info.phoneNumber)) {
            errors.phoneNumber = 'Please specify a valid phone number.';
            hasErrors = true;
        }
        this.setState({errors: errors});
        return hasErrors;
    }

    render() {
        let content = <ContactPage info={this.state.info} errors={this.state.errors} onChange={this.changeInfo} phoneNumber={this.props.phoneNumber} onSubmit={this.sendInfo} />;
        if(this.state.working) {
            content = <WorkingPage label="Sending Message"/>;
        }
        return (
          <div className="contact">
              {content}
          </div>
        );
    }
}

Contact.propTypes = {
    phoneNumber: PropTypes.string.isRequired
};

export default Contact;