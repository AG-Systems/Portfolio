import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DownloadLink from "react-download-link";

class Navbar extends Component {
  render() {
    return (
        <div className="ui teal inverted top fixed menu">
          <a href="https://www.chronoci.com/" target="_blank">
              <div className="item">
                <img src="https://www.chronoci.com/white_chronoci_logo.png" />
              </div>
          </a>
          <Link to="/" className="item" >Blog</Link>
          <Link to="/projects" className="item">Projects</Link>
          <Link to="/about" className="item">About</Link>
          <a href="https://www.dropbox.com/s/m0vkrvgfy6tiy7m/MaxCh_CS_Resume.doc?dl=0" className="item"><i className="download icon"></i>Resume</a>
        </div>
    );
  }
}

export default Navbar;

// White  white_chronoci_logo.png

// Black logo_navbar.png