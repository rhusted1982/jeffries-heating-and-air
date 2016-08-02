import React, {PropTypes} from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-xs-4 centered-text">
                    <span className="caption">Contact Us!</span>
                </div>
                <div className="col-xs-6">
                    <div className="row">
                        <span>{props.phoneNumber}</span>
                    </div>
                    <div className="row">
                        <span>{props.email}</span>
                    </div>
                </div>
                <div className="col-xs-2 centered-button">
                    <a href={props.facebook}><i className="fa fa-facebook-square fa-2x pull-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="row">
                <hr />
            </div>
            <div className="row">
                {/*<img className="brand" src={props.brandImage}></img>*/}
            </div>
        </div>
    );
};

Header.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    brandImage: PropTypes.string.isRequired
};

export default Header;