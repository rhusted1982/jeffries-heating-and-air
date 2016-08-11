import React from 'react';
import Header from './header.presentation';

class HeaderController extends React.Component {

    render () {
        const phoneNumber = `(${process.env.PhoneNumber.substring(1,4)}) ${process.env.PhoneNumber.substring(4,7)}-${process.env.PhoneNumber.substring(7)}`;
        return(<Header 
                    phoneNumber={phoneNumber} 
                    email={process.env.Email} 
                    facebook={process.env.Facebook} 
                    image={require('./brand.png')} />
            );
    }
}

export default HeaderController;