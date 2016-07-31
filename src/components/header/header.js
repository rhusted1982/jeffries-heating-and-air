import React from 'react';
import ContactHeader from './contactHeader';
import NavigationHeader from './navigationHeader';

const Header = () => {
    return (
        <div className="container-fluid">
            <ContactHeader phoneNumber="(606)303-2233" email="hvacguy88@gmail.com" facebook="http://www.facebook.com/jeffriesheating/"/>
            <NavigationHeader/>
        </div>
    );
};

export default Header;