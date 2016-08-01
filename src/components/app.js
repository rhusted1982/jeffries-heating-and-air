import React, {PropTypes} from 'react';
import Header from './header/header';

const App = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;

