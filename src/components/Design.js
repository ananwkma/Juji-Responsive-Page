import React, { Component } from 'react';
import '../styles/Design.scss';

class Logobar extends Component {
  render() {
    return (
      <div>
        <div className="DesignContainer">
          <div className="HeaderContainer">
            <h1> Customize AI Persona and Conversation </h1>
          </div>
          <div className="BlurbContainer">
            <div className="JujiImgContainer">
              <img className="JujiImg" alt="jujibot" src="jujibot.png"/>
            </div> 
            <div className="Blurb">
              <h2> Juji </h2>
              <h3> Hi, I am Juji, the quentisential default REP, 
              who has a kind heart with a sense of humor. 
              I am best at winning people's heart. </h3>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Logobar;
