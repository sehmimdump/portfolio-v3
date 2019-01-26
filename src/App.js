import React, { Component } from 'react';
import './App.sass';
import LandingPage from "./components/landingPage";
import SecondPage from "./components/secondPage";
class App extends Component {

  render() {

    return (
      <div className="App">
        <LandingPage dataFromLand ={ this.changingState } />
        <SecondPage />
      </div>
    );
  }
}

export default App;
