import React, { Component } from 'react';
import FadeIn from 'react-fade-in';


export default class PageNotFound extends Component {

  render() {
    return (
        <div className="page-not-found">
          <div style={{ width: "100%", height: "90px" }}></div>
            <div className="ui centered card" style={{ minWidth: "320px" }}>
              <div className="image">
                <img src="https://78.media.tumblr.com/03b4408befa3aecba496fc4b407f6ee6/tumblr_olzyxpnI9x1uut849o1_500.jpg" />
              </div>
              <div className="content">
                <a href="/" className="header">Page not found you silly bunny</a>
              </div>
              <div className="extra content">
                <a href="/">
                  <i className="user icon"></i>
                  Click here to go back to home
                </a>
              </div>
            </div>           
        </div>
    );
  }
}

// 
