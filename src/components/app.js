import React, {PropTypes} from 'react';
import Header from './header/header.presentation';

const App = (props) => {
    const phoneNumber = "16063032233";
    const formattedPhoneNumber = "(606) 303-2233";
    const email = "hvacguy88@gmail.com";
    const facebook = "http://www.facebook.com/jeffriesheating/";
    const children = React.Children.map(props.children,
        child => {
            switch(child.type.name) {
                case 'Home':
                case 'Contact':
                    return React.cloneElement(child, {phoneNumber: phoneNumber});
                default:
                    return child;
            }
        }
    );
    return (
        <div className="container-fluid">
            <Header phoneNumber={formattedPhoneNumber} email={email} facebook={facebook} image={require('./../images/brand.png')} />
            {children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default App;

