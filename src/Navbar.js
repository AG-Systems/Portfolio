import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DownloadLink from "react-download-link";
import $ from "jquery";

class Navbar extends Component {
  constructor(props)
  {
    super(props);
    
  }
  
  componentDidMount()
  {
  }
  
  showMobileMenu()
  {
    if(document.getElementById("popup-menu"))
    {
      document.getElementById("popup-menu").style.display = "inline";  
      //document.getElementById("main-content").style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  }

  hideMobileMenu()
  {
    if(document.getElementById("popup-menu"))
    {
      document.getElementById("popup-menu").style.display = "none";   
    }
  }
  
  
  render() {
    
    if(window.innerWidth <= 500)
    {
       return(
          <div>
            <div className="ui teal inverted top fixed menu">
              <a href="https://www.chronoci.com/" target="_blank">
                  <div className="item">
                    <img src="https://www.chronoci.com/white_chronoci_logo.png" />
                  </div>
              </a>
              <a onClick={ this.showMobileMenu } className="item ui right floated" style={{ float: "right" }}><i style={{ fontSize: "25px" }} className="bars icon"></i></a>
            </div>
            
            <div>
              <div className="ui left fixed vertical menu" id="popup-menu" style={{ display: "none" }}>
                <div className="item">
                  <img className="ui mini image" src="https://www.chronoci.com/logo_navbar.png"  />
                </div>
                <Link to="/" className="item" >Blog</Link>
                <Link to="/projects" className="item">Projects</Link>
                <Link to="/portfolio" className="item">Portfolio</Link>
                <Link to="/about" className="item">About</Link>
                <a href="https://www.dropbox.com/s/m0vkrvgfy6tiy7m/MaxCh_CS_Resume.doc?dl=0" className="item"><i className="download icon"></i>Resume</a>


                
                <div id="mybutton">
                  <button className="circular ui icon red button" onClick={ this.hideMobileMenu } style={{ fontSize: "18px" }}>
                    <i className="angle double left icon" />
                  </button> 
                </div>
              </div>
            </div>



          </div>

         );
    } else {
        return (
          <div>
            <div className="ui teal inverted top fixed menu">
              <a href="https://www.chronoci.com/" target="_blank">
                  <div className="item">
                    <img src="https://www.chronoci.com/white_chronoci_logo.png" />
                  </div>
              </a>
              <Link to="/" className="item" >Blog</Link>
              <Link to="/projects" className="item">Projects</Link>
              <Link to="/portfolio" className="item">Portfolio</Link>
              <Link to="/about" className="item">About</Link>
              <a href="https://www.dropbox.com/s/m0vkrvgfy6tiy7m/MaxCh_CS_Resume.doc?dl=0" className="item"><i className="download icon"></i>Resume</a>
            </div>
          </div>
        );      
    }
  }
}

export default Navbar;

// White  white_chronoci_logo.png

// Black logo_navbar.png