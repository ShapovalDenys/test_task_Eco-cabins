import React from 'react';

import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <HomePage />
    <Footer />
  </div>
);

export default App;
