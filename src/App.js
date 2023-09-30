import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <Hero />
      <Features />
      <Blog />
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
