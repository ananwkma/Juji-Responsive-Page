import React, { Component } from 'react';
import '../styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="NavItem"><h1>My Collection</h1> 
          <img className="MyCollectionImg" alt="mycollection" src="mycollection.png"/>
        </div>
        <div className="NavItem"><h1>AI App 1</h1> </div>
        <div className="NavItem"><h2>Design</h2></div>
        <div className="NavItem"><h2>Preview</h2></div>
        <div className="NavItem"><h2>Deploy</h2></div>
        <div className="NavItem"><h2>Results</h2></div>
      </div>
    );
  }
}

export default Navbar;
