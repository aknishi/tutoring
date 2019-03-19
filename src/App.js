import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Header from './homepage/Header';
import About from './homepage/About';
import Features from './homepage/Features';
import Languages from './homepage/Languages';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Features />
        <Languages />
      </div>
    );
  }
}

export default App;
