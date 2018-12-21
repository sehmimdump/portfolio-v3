import React, { Component } from 'react';
import './App.sass';
import LandingPage from "./components/landingPage";
class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topchunk"></div>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
