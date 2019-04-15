import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Logobar from './Logobar';
import Design from './Design';

class App extends Component {
  render() {
    return (
      <div className="AppContainer"> 
        <div className="App">
          <Navbar />
          <Design />
        </div>
        <Logobar />
      </div>
    );
  }
}

export default App;
