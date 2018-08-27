import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Blog from './Blog';
import PageNotFound from './PageNotFound';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render(
      <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/blog/:title' component={ Blog } />
                <Route exact path='/projects' component={ Projects } />
                <Route exact path='/about' component={ About } />
                <Route exact path='/' component={ Home } />
                <Route component={ PageNotFound } />
            </Switch>
        </div>
      </BrowserRouter>
    , document.getElementById('root')
    );
registerServiceWorker();
