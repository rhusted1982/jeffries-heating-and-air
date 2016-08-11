import React from 'react';
import Header from './header.presentation';

class HeaderController extends React.Component {

    render () {
        const phoneNumber = '(606) 303-2233';
        const email = 'hvacguy88@gmail.com';
        const facebook = 'https://www.facebook.com/jeffriesheating';
        return(<Header 
                    phoneNumber={phoneNumber} 
                    email={email} 
                    facebook={facebook} 
                    image={require('./brand.png')} />
            );
    }
}

export default HeaderController;