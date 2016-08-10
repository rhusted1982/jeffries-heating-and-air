import React, {PropTypes} from 'react';
import HeaderPage from './header/headerPage';
import FooterPage from './footer/footerPage';

const App = (props) => {
    const phoneNumber = "16063032233";
    const formattedPhoneNumber = "(606) 303-2233";
    const email = "hvacguy88@gmail.com";
    const facebook = "http://www.facebook.com/jeffriesheating/";
    let Footer = <FooterPage phoneNumber={phoneNumber} />;
    if(props.location.pathname === '/contact' || props.location.pathname === '/service')
        Footer = null;
    const children = React.Children.map(props.children,
        child => {
            switch(child.type.name) {
                case 'Contact':
                    return React.cloneElement(child, {phoneNumber: phoneNumber});
                default:
                    return child;
            }
        }
    );
    return (
        <div className="container-fluid">
            <HeaderPage phoneNumber={formattedPhoneNumber} email={email} facebook={facebook} image={require('./../images/brand.png')} />
            {children}
            {Footer}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default App;

