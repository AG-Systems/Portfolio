import React, { Component } from 'react';
import FadeIn from 'react-fade-in';


export default class FoundingChronoci extends Component {

  render() {
    return (
        <div className="post">
            <div className="content content-home" style={{ minHeight: "100vh", height: "auto" }}>
                    <div style={{ width: "100%", height: "70px" }}></div>
                    <h1 style={{ textAlign: "center" }}>How I founded ChronoCI </h1>
                    <div className="ui basic segment">
                      <p>I was always told build to fix problems that you have on your own. 
                      I remember thinking that quote in my math class in college. Then it just hit me. 
                      I am going to build an application that tests my code for security holes</p>
                    </div>
                    <div className="ui basic segment">
                      <p>
                      To be fair, I was working on ChronoCI before I had the idea to what it is now. I was building it into a site that offers many services such as installing ssl or peneration testing. 
                      Then I pivoted to an idea where I write custom tests for the users to make sure their app is secure. 
                      I realized that was pointless and unscalable.
                      </p>
                      <p>
                      <b>Here is how it would work:</b>
                      </p>
                      <p>
                      Ruby on Rails is going to handle everything. The auth, payments (with stripe), and the main views. I am going to have an backend app that is just in charge of running the tests / scanning the code.
                      The backend app is going to be using containers to keep the users code clean and with kubernetes, create and destroy the docker containers.
                      Its going to use GitHub API to get access users repo's.
                      </p>
                    </div>
            </div>
        </div>
    );
  }
}
