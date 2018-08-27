import React, { Component } from 'react';
import FadeIn from 'react-fade-in';


/* BLOG POSTS */
import BuildingPixelml from './Posts/BuildingPixelml';
import FoundingChronoci from './Posts/FoundingChronoci';
/*            */

import { BrowserRouter, Route, Link } from 'react-router-dom';


export default class Blog extends Component {
  constructor(props)
  {
    super(props);
    window.scrollTo(0, 0);
    
  }
  render() {
    return (
        <div className="blog" style={{ background: "#f7f9fa" }}>
          <BrowserRouter>
            <div>
                
                <Route exact path='/blog/building-pixelml' component={ BuildingPixelml } />
                <Route exact path='/blog/founding-chronoci' component={ FoundingChronoci } />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}
