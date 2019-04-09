import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

class Card extends Component {
  render() {
    return (
      <div className="ui card" style={{ minWidth: "250px", marginBottom: "35px" }}>
        <div className="content">
          <div className="right floated meta">14h</div> 
          { this.props.date }
        </div>
        <div className="ui slide masked reveal image">
          <img src={ this.props.img } className="visible content" />
          <img src={ this.props.img2 } className="hidden content" />
        </div>
        <div className="content">
          <Link to={ "blog/" + this.props.url } className="header">{ this.props.title }</Link>
          <div className="description">
            { this.props.desc }
          </div>
        </div>
        <div className="extra content">
          <Link to={ "blog/" + this.props.url }>
            <i className="angle double right icon"></i>
            READ MORE
          </Link>
        </div>
      </div>
      );
  }
}
class Home extends Component {
  
  constructor(props)
  {
    super(props);
    window.scrollTo(0, 0);
  }
  

  renderBlogPosts()
  {
      const posts = [
        { title: "How I founded ChronoCI", date: "May 05, 2018", desc: "My biggest, hardest, and most ambitious project", url: "founding-chronoci", img2: "https://puu.sh/B5T4c/290505f1d1.png", img: "https://puu.sh/Bl3ra/d6fcafd5bc.png" },
        { title: "Building PixelML", date: "May 16, 2017", desc: "How I built a webapp that analyzes online advertisement", url: "building-pixelml", img2: "https://puu.sh/Bl5xO/a957d3c9d4.png", img: "https://puu.sh/Bl5wb/a64cd1c1cb.png" }
     ];
     return posts.map((post, index) => (
        <Card title={ post.title } date={ post.date } desc={ post.desc } url={ post.url } key={index} img={ post.img } img2={ post.img2 }/>
    ));   
  }
  
  render() {
    return (
      <div className="Home">
        <div className="border-bottom">
          <div style={{ width: "100%", height: "70px" }}></div>
          <h1 style={{ textAlign: "center", fontSize: "46px" }}>My Blog</h1>
          <div style={{ width: "100%", height: "35px" }}></div>
        </div>
        <div style={{ background: "#e6e6e6", minHeight: "90vh", height: "auto" }}>
          <FadeIn delay={ 200 }>
            <div className="ui three stackable cards" style={{ minWidth: "250px", margin: "0 auto" }}>
              <div style={{ width: "100%", height: "35px" }}></div>
              { this.renderBlogPosts() }
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default Home;
