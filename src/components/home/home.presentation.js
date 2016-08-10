import React, {PropTypes} from 'react';
import About from './../about/about.presentation';
import Service from './../service/service.controller';

const HomePresentation = (props) => {
    return (
        <div className="home">
            <div>
                <About />
                <hr />
                <Service setWorking={props.setWorking} />
            </div>
        </div>
    );
};

HomePresentation.propTypes = {
    setWorking: PropTypes.func.isRequired
};

export default HomePresentation;