import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

class Card extends Component {
  render() {
    return (
      <div className="ui card" style={{ minWidth: "250px", marginBottom: "35px" }}>
       {/* 
        <div className="content">
          <div className="right floated meta">14h</div>
          Built: { this.props.date }
        </div>
        */}
        <div className="image">
          <img src={ this.props.img } />
        </div>
        <div className="content">
          <a href={ this.props.url } className="header">{ this.props.title }</a>
          <div className="description">
            { this.props.desc }
          </div>
        </div>
      <div className="extra content hidden" style={{ display: this.props.HowItWorked.length === 0 ? "none": "block" }}>
        <a>
          <i className="question circle icon"></i>
          { this.props.HowItWorked }
        </a>
      </div>
      <div className="extra content">
          <div className="description">
            <b>Tech stack: </b> { this.props.stack }
          </div>        
      </div>
        <div className="extra content">
          <a href={ this.props.url }>
            <i className="share square icon"></i>
            VIEW PROJECT
          </a>
        </div>
      </div>
      );
  }
}
class Projects extends Component {
  
  constructor(props)
  {
    super(props);
    window.scrollTo(0, 0);
  }
  

  renderProjects()
  {
      const posts = [
        { 
          title: "ChronoCI", 
          date: "May 05, 2018", 
          HowItWorked: "", 
          desc: "Webapp that is a platform for testing your application for vulnerabilities. ", 
          url: "https://www.chronoci.com/", img: "https://puu.sh/B5T4c/290505f1d1.png", 
          techstack: "React, Redux, React-Router, Webpack, Ruby on Rails, Sidekiq, GitHub api, Stripe api, Redis, MongoDB, PostgreSQL, Python, Flask, Kubernetes, Docker, Docker-compose, Google Kubernetes Engine, Google Compute Engine" 
        },
        { 
          title: "PixelML", 
          date: "May 16, 2017", 
          HowItWorked: "Algorithm is powered by a convolutional neural network trained from good and bad advertisements.", 
          desc: "Machine learning webapp that rates online advertisements for businesses.", 
          url: "https://github.com/AG-Systems/rails-ml", 
          img: "https://puu.sh/Bl5xO/a957d3c9d4.png", 
          techstack: "Tensorflow, TFLearn, SkLearn, Ruby on Rails, Python, Amazon S3, Google Cloud Compute Engine, Stripe API" }, 
        { 
          title: "React-FBchatbox", 
          date: "April 9, 2017", 
          HowItWorked: "This project helped me understand react more in depth and learn redux for future projects", 
          desc: "Real time chat application built that is themed after facebook's desktop chat tabs. Socket.io & Express.js lets users go on the website and chat with others.", 
          url: "https://github.com/AG-Systems/react-fbchatbox", img: "https://camo.githubusercontent.com/1c7cc1debc83051a4cb0b033c0a1545de7595ea6/68747470733a2f2f7075752e73682f79524c51382f623939663065313934322e676966", 
          techstack: "React, Redux, Webpack, Giphy API, Node.js, Express, Socket.io  & Bootstrap" },
        { 
          title: "Stock Simulator", 
          date: "Aug 25, 2018", 
          HowItWorked: "STILL IN PROGRESS (NOT COMPLETE)", 
          desc: "Stock simulator app built with Angular2. Trade real stocks by buying, selling, shorting, and (calls, & puts) options with virtual money. Mobile first, modeled after Charles Schawb & Robinhood.", 
          url: "https://github.com/AG-Systems/stock-simulator-app", 
          img: "https://bitemycoin.com/wp-content/uploads/2018/03/Robinhood-Review.png", 
          techstack: "Angular2, Angular CLI" 
        },
        { 
          title: "React Search Item Component", 
          date: "Aug 25, 2018", 
          HowItWorked: "Open source library", 
          desc: "Fluid mobile item responsive search component for React", 
          url: "https://github.com/AG-Systems/react-search-item-component", 
          img: "https://camo.githubusercontent.com/dac6dfc96262ceef668066772e90a41e6117bcd2/68747470733a2f2f7075752e73682f79517962572f646338646564613438332e706e67", 
          techstack: "React, NPM" 
        },
        { 
          title: "hyperapp-rails", 
          date: "Aug 25, 2018", 
          HowItWorked: "Open source library", 
          desc: "Integrate Hyperapp.js with Rails https://hyperapp.js.org/", 
          url: "https://github.com/AG-Systems/hyperapp-rails", 
          img: "https://www.bypeople.com/wp-content/uploads/2017/07/hyperapp-js-library.jpg", 
          techstack: "Ruby on Rails, Ruby, Hyperapp.js" 
        },

     ];
     return posts.map((post, index) => (
        <Card title={ post.title } HowItWorked={ post.HowItWorked } date={ post.date } desc={ post.desc } url={ post.url } key={index} img={ post.img } stack={ post.techstack }/>
    ));   
  }
  
  render() {
    return (
      <div className="Home">
        <div className="border-bottom">
          <div style={{ width: "100%", height: "70px" }}></div>
          <h1 style={{ textAlign: "center", fontSize: "46px" }}>My Projects</h1>
          <div style={{ width: "100%", height: "35px" }}></div>
        </div>
        <div style={{ background: "#e6e6e6", minHeight: "80vh", height: "auto" }}>
         <FadeIn delay={ 200 }>
          <div className="ui three stackable cards" style={{ minWidth: "250px", width: "92%", margin: "0 auto" }}>
            <div style={{ width: "100%", height: "35px" }}></div>
            { this.renderProjects() }
          </div>
         </FadeIn>
        </div>
      </div>
    );
  }
}

export default Projects;
