import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import ServiceArea from './components/serviceArea/serviceArea';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="serviceArea" component={ServiceArea} />
  </Route>
);