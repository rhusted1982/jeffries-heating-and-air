import React, {PropTypes} from 'react';

const TextInput = (props) => {
    let wrapper = 'textInput form-group';
    if(props.error && props.error.length > 0)
        wrapper += ' has-error';
    return (
        <div className={wrapper}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type="text"
                       className="form-control"
                       name={props.name}
                       placeholder={props.label}
                       value={props.value}
                       onChange={props.onChange}
                />
                <div className="input">{props.error}</div>
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default TextInput;