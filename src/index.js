import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
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
import learn_path from './learn-path';
import about from './about';
import root from './root';
import Allcourse from './all_course';
import course from './course';
import Enroll from './enroll-header';
import Lecture from './lecture';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={root}></Route>
            <Route path="/home" component={home}></Route>
            <Route path="/learn-path" component={learn_path}></Route>
            <Route path="/about" component={about}></Route>
            <Route path="/all_course/:filter?/:id?/" render={(props) => (<Allcourse key={props.match.params.filter+props.match.params.id} {...props} />)
            } ></Route>
            <Route path="/courses/:course/" component={course}></Route>
            <Route path="/enroll/:course/" component={(props) => (<Enroll link_action="enroll" {...props}  />)} ></Route>
            <Route path="/instructor/:course/" component={(props) => (<Enroll link_action="instructor" {...props}  />)} ></Route>
            <Route path="/course/:course/lesson/:lesson/lecture/:lecture/" render={(props) => (<Lecture key={props.match.params.lesson + props.match.params.lecture} {...props} />)
            } ></Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
