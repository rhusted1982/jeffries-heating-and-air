import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TextInput from './../common/textInput';
import SelectInput from './../common/selectInput';
import TitlePage from './../title/titlePage';

const ContactPage = (props) => {

    return (
        <div className="contact">
            <TitlePage title="Contact Us" />
            <TextInput name="name" label="Your Name" value={props.info.name} onChange={props.onChange} error={props.errors.name} />
            <SelectInput name="reason" label="Reason for Contacting" value={props.info.reason} onChange={props.onChange} error={props.errors.reason} options={props.reasons} />
            <label className="control-label">Please specify atleast one:</label>
            <TextInput type="email" name="email" label="Your Email" value={props.info.email} onChange={props.onChange} error={props.errors.email} />
            <TextInput type="tel" name="phoneNumber" label="Your Phone Number" value={props.info.phoneNumber} onChange={props.onChange} error={props.errors.phoneNumber}/>
            <div className="footer">
                <button className="btn btn-primary" onClick={props.onSubmit}><i className="fa fa-envelope-o pull-left text-center" aria-hidden="true"></i>Send Message</button>
                <Link to="/" className="btn btn-primary"><i className="fa fa-times pull-left" aria-hidden="true"></i>Cancel</Link>
                <a className="btn btn-primary" href={'tel:'+ props.phoneNumber}><i className="fa fa-phone pull-left" aria-hidden="true"></i>Call Us Instead</a>
            </div>
        </div>
    );
};

ContactPage.propTypes = {
    info: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reasons: PropTypes.array.isRequired
};

export default ContactPage;