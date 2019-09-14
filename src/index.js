import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import "bootstrap";
import "jquery";
import './assets/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/js/custom';
import './index.css';
import home from './home';
import root from './root';
import all_course from './all_course';
import course from './course';
import enroll from './enroll';
import lecture from './lecture';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={root}></Route>
        <Route path="/home" component={home}></Route>
        <Route path="/all_course/:filter?/:id?/" component={all_course}></Route>
        <Route path="/courses/:course/" component={course}></Route>
        <Route path="/enroll/:course/" component={enroll}></Route>
        <Route path="/course/:course/lesson/:lesson/lecture/:lecture/" component={lecture}></Route>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
