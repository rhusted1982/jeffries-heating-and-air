import React, {PropTypes} from 'react';
import TextInput from '../controls/input.presentation';
import SelectInput from '../controls/select.presentation';
import Title from './../title/title.presentation';

const ContactPagePresentation = (props) => {

    return (
        <div className="contact">
            <Title title="Contact Us" />
            <TextInput name="name" label="Your Name" value={props.info.name} onChange={props.onChange} error={props.errors.name} />
            <SelectInput name="reason" label="Reason for Contacting" value={props.info.reason} onChange={props.onChange} error={props.errors.reason} options={props.reasons} />
            <label className="control-label">Please specify atleast one:</label>
            <TextInput type="email" name="email" label="Your Email" value={props.info.email} onChange={props.onChange} error={props.errors.email} />
            <TextInput type="tel" name="phoneNumber" label="Your Phone Number" value={props.info.phoneNumber} onChange={props.onChange} error={props.errors.phoneNumber}/>
            <hr />
            <div className="footer">
                <button className="btn btn-primary" onClick={props.onSubmit}><i className="fa fa-envelope-o pull-left text-center" aria-hidden="true"></i>Send Message</button>
                <a className="btn btn-primary" href={'tel:'+ props.phoneNumber}><i className="fa fa-phone pull-left" aria-hidden="true"></i>Call Us Instead</a>
            </div>
        </div>
    );
};

ContactPagePresentation.propTypes = {
    info: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reasons: PropTypes.array.isRequired
};

export default ContactPagePresentation;