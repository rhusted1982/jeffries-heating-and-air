import React, {PropTypes} from 'react';

const Select = (props) => {
    let wrapper = 'form-group';
    if(props.error && props.error.length > 0)
        wrapper += ' has-error';
    let options = [];
    props.options.forEach(element => options.push(<option value={element}>{element}</option>));
    return (
        <div className={wrapper}>
            <div className="field">
                <select className="form-control"
                        name={props.name}
                        placeholder={props.label}
                        value={props.value}
                        onChange={props.onChange}>
                    <option value="" disabled>{props.label}</option>
                    {options}
                </select>
                <div className="input">{props.error}</div>
            </div>
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    options: PropTypes.array.isRequired
};

export default Select;