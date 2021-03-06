import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import LazyImage from "react-lazy-progressive-image";

export default class About extends Component {
  constructor(props)
  {
    super(props);
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
        <div className="about">
            <div style={{ width: "100%", height: "90px" }}></div>
            <FadeIn>
                <h1 style={{ textAlign: "center", fontSize: "46px" }}>About me </h1>
                <br/>
            </FadeIn>
            <FadeIn delay={ 150 } transitionDuration={ 500 }>
                <div className="ui card" style={{ minWidth: "320px", margin: "0 auto" }}>
              <div className="image">
                <LazyImage
                  placeholder={"https://i.redd.it/ounq1mw5kdxy.gif"}
                  src={"https://cdn.wallpaperjam.com/static/images/m/75/bd/75bd114ac2882ae38500460dabcff02cb45c72a7.jpg"}
                >
                  {(src, loading, isVisible) => <img src={src} />}
                </LazyImage>                
              </div>
              <div className="content">
                <a className="header">Max Chakhmatov</a>
                <div className="meta">
                  <span className="date">Born in 1998 (20 years old)</span>
                </div>
                <div className="description">
                  Teenager who has many hobbies and interests who is obsessed with learning and improving on his craft.
                </div>
              </div>

              <div className="extra content">
                <div className="description">
                <b>Current interests:</b> Computer Science, Software Engineering, Stock Market, Poker, Cars, Crypto Currency, & Entrepreneurship               
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="map marker alternate icon"></i>
                  Menlo Park, CA
                </a>
              </div>
              <div className="extra content">
                <a>
                  <i className="envelope icon"></i>
                   maxchakhmatov@gmail.com
                </a>
              </div>
            </div>
            </FadeIn>
            <div style={{ width: "100%", height: "45px" }}></div>
            <FadeIn delay={ 250 } transitionDuration={ 600 }>
            
                <div className="ui four cards" style={{ margin: "0 auto", width: "95%" }}>
                  <div className="card" style={{ minWidth: "250px", margin: "0 auto", marginBottom: "35px" }}>
                    <div className="content">
                      <div className="header" style={{ textAlign: "center" }}>Stack Overflow</div> </div>
                    <a href="https://stackoverflow.com/users/5487345/auriga">
                        <div className="ui orange bottom attached button">
                          <i className="tasks icon"></i>
                          Stack Overflow
                        </div>
                    </a>
                 </div>
                 
                  <div className="card" style={{ minWidth: "250px", margin: "0 auto", marginBottom: "35px" }}>
                    <div className="content">
                      <div className="header" style={{ textAlign: "center" }}>LinkedIn</div> </div>
                        <button className="ui bottom attached linkedin button">
                         <a href="https://www.linkedin.com/in/max-chakhmatov/" style={{ color: "white" }}>
                          <i className="linkedin icon"></i>
                          LinkedIn
                          </a>
                        </button>
                 </div>
                 
                  <div className="card" style={{ minWidth: "250px", margin: "0 auto", marginBottom: "35px" }}>
                    <div className="content">
                      <div className="header" style={{ textAlign: "center" }}>GitHub</div> </div>
                  <a href="https://github.com/AG-Systems">
                    <div className="ui black bottom attached button">
                      <i className="terminal icon"></i>
                      GitHub
                    </div>
                 </a>
                 </div>
                 
                  <div className="card" style={{ minWidth: "250px", margin: "0 auto", marginBottom: "35px" }}>
                    <div className="content">
                      <div className="header" style={{ textAlign: "center" }}>Instagram</div> </div>
                    <button className="ui bottom attached instagram button">
                     <a href="https://www.instagram.com/maxchakhmatov/" style={{ color: "white" }}>
                      <i className="instagram icon"></i>
                      Instagram
                     </a>
                    </button>
                 </div>
                </div>
                
            </FadeIn>
        </div>
    );
  }
}
