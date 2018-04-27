import React, { Component } from 'react';
import logo from './Penrod.svg';
import Dashboard from './components/Dashboard.js';
import './App.css';
import './assets/styles/salesforce-lightning-design-system.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="page-header slds-text-title">
            <img src={logo} className="App-logo" alt="logo" />
            <span id="App-title">Office Weather Forecast</span>
          </h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
