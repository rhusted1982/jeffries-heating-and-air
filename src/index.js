import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './../node_modules/toastr/build/toastr.min.css';
import './../node_modules/slick-carousel/slick/slick.css';
import './../node_modules/slick-carousel/slick/slick-theme.css';
import './components/app.css';
import './components/deal/deal.css';
import './components/header/header.css';
import './components/home/home.css';
import './components/review/review.css';
import './components/service/service.css';
import './components/title/title.css';
import './components/working/working.css';

render(
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0,0)}/>,
    document.getElementById('app')
);