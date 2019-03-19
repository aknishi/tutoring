import React, { Component } from 'react';
import './css/App.css';
import Header from './homepage/Header';
import About from './homepage/About';
import Features from './homepage/Features';
import Languages from './homepage/Languages';
import Reviews from './homepage/Reviews';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Features />
        <Languages />
        <Reviews />
      </div>
    );
  }
}

export default App;
