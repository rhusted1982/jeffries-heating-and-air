import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import About from './../about/about.presentation';
import Service from './../service/service.controller';
import Deal from './../deal/deal.presentation';
import Review from './../review/review.presentation';

const HomePresentation = (props) => {
    return (
        <div className="home">
            <div>
                <About />
                <hr />
                <Service setWorking={props.setWorking} />
                <hr />
                <Deal />
                <hr />
                <Review size="3" />
                <hr />
                <div className="footer">
                    <a className="btn btn-primary" href={'tel:'+ props.phoneNumber}><i className="fa fa-phone pull-left" aria-hidden="true"></i>Call Us</a>
                    <Link to="/contact" className="btn btn-primary"><i className="fa fa-envelope-o pull-left" aria-hidden="true"></i>Send Us a Message</Link>
                </div>
            </div>
        </div>
    );
};

HomePresentation.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    setWorking: PropTypes.func.isRequired
};

export default HomePresentation;