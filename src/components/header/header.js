import React from 'react';
import ContactHeader from './contactHeader';
import NavigationHeader from './navigationHeader';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <ContactHeader phoneNumber="(606)303-2233"
                               email="hvacguy88@gmail.com"
                               facebook="http://www.facebook.com/jeffriesheating/"
                />
            </div>
            <hr />
            <NavigationHeader/>
        </div>
    );
};

export default Header;