import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Blog from './Blog';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';


ReactDOM.render(
      <BrowserRouter>
        <div>
            <Navbar />
            <Route exact path='/blog/:title' component={ Blog } />
            <Route exact path='/projects' component={ Projects } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/' component={ Home } />
        </div>
      </BrowserRouter>
    , document.getElementById('root')
    );
registerServiceWorker();
