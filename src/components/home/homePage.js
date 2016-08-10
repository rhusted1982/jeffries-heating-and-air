import React, {PropTypes} from 'react';
import AboutPage from '../about/aboutPage';
import Service from '../service/service';

const HomePage = (props) => {
    return (
        <div className="home">
            <div>
                <AboutPage />
                <hr />
                <Service setWorking={props.setWorking} />
            </div>
        </div>
    )
}

HomePage.propTypes = {
    setWorking: PropTypes.func.isRequired
}

export default HomePage;