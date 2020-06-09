import React from 'react';

import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/Footer';
import SideBar from './components/sideBar/SideBar';

const App = () => (
  <div className="App" id="App">
    <div className="sidebar">
      <SideBar outerContainerId="App" pageWrapId="wrapper" />
    </div>
    <div id="wrapper">
      <Header />
      <HomePage />
      <Footer />
    </div>
  </div>
);

export default App;
