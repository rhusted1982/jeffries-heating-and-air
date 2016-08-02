import React, {PropTypes} from 'react';

const TextInput = (props) => {
    let wrapper = 'textInput form-group';
    if(props.error && props.error.length > 0)
        wrapper += ' has-error';
    let type = 'text';
    return (
        <div className={wrapper}>
            <div className="field">
                <input type={props.type ? props.type : 'text'}
                       className="form-control"
                       name={props.name}
                       placeholder={props.label}
                       value={props.value}
                       onInput={props.onChange}
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
    error: PropTypes.string,
    type: PropTypes.string
};

export default TextInput;