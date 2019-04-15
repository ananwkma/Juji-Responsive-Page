import React, { Component } from 'react';
import '../styles/Logobar.css';

class Logobar extends Component {
  render() {
    return (
      <div className="Logobar">
        <div className="Logo"><img className="Image" alt="" src="juji.jpg"/></div>
        <div className="LogobarItemContainer">
          <div className="LogobarItem"><img className="Image" alt="" src="copy.png"/></div>
          <div className="LogobarItem"><img className="Image" alt="" src="power.png"/></div>
        </div>
      </div>
    );
  }
}

export default Logobar;
