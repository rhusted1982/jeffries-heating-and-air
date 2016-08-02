import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CallButton from './../common/callButton';
import TextInput from './../common/textInput';

const ContactPage = (props) => {
    return (
        <div className="contactPage">
            <TextInput name="name" label="Your Name" value={props.info.name} onChange={props.onChange} error={props.errors.name} />
            <TextInput name="email" label="Your Email" value={props.info.email} onChange={props.onChange} error={props.errors.email} />
            <TextInput name="phoneNumber" label="Your Phone Number" value={props.info.phoneNumber} onChange={props.onChange} error={props.errors.phoneNumber}/>
            <TextInput name="reason" label="Reason for Contacting" value={props.info.reason} onChange={props.onChange} error={props.errors.reason}/>
            <TextInput name="message" label="Message" value={props.info.message} onChange={props.onChange} error={props.errors.message}/>
            <div className="footer">
                <button className="btn btn-primary" onClick={props.onSubmit}>Send Message</button>
                <Link to="/" className="btn btn-primary">Cancel</Link>
                <CallButton className="btn btn-primary" phoneNumber={props.phoneNumber} label="Call Us Instead" />
            </div>
        </div>
    );
};

ContactPage.propTypes = {
    info: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default ContactPage;