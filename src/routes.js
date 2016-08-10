import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home.controller';
import Contact from './components/contact/contact.controller';
import Review from './components/review/review.controller';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="review" component={Review} />
  </Route>
);