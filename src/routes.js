import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home.controller';
import Contact from './components/contact/contact.controller';
import ReviewPage from './components/review/reviewPage.presentation';
import DealPage from './components/deal/dealPage.presentation';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="review" component={ReviewPage} />
      <Route path="deal" component={DealPage} />
  </Route>
);