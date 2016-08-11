import React, {PropTypes} from 'react';
import Header from './header/header.controller';

const App = (props) => {
    const children = React.Children.map(props.children,
        child => {
            switch(child.type.name) {
                case 'ReviewController':
                    return React.cloneElement(child, {present: 'slider'});
                default:
                    return child;
            }
        }
    );
    return (
        <div className="container-fluid">
            <Header />
            {children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default App;

