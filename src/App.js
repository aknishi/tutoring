import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Header from './homepage/Header';
import About from './homepage/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
