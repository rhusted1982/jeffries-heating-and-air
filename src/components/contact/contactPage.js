import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import LinkButton from '../common/linkButton';
import TextInput from './../common/textInput';
import SelectInput from './../common/selectInput';

const ContactPage = (props) => {
    return (
        <div className="contactPage">
            <TextInput name="name" label="Your Name" value={props.info.name} onChange={props.onChange} error={props.errors.name} />
            <SelectInput name="reason" label="Reason for Contacting" value={props.info.reason} onChange={props.onChange} error={props.errors.reason} options={[]} />
            <label className="form-control">Please specify atleast one:</label>
            <TextInput type="email" name="email" label="Your Email" value={props.info.email} onChange={props.onChange} error={props.errors.email} />
            <TextInput type="tel" name="phoneNumber" label="Your Phone Number" value={props.info.phoneNumber} onChange={props.onChange} error={props.errors.phoneNumber}/>
            <div className="footer">
                <button className="btn btn-primary" onClick={props.onSubmit}>Send Message</button>
                <Link to="/" className="btn btn-primary">Cancel</Link>
                <LinkButton href={'tel:'+ props.phoneNumber} label="Call Us Instead" />
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