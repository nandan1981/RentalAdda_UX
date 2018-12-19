import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import PropsTest from './PropsTest'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
          isVisible: true
    }
  };

  render() {
    var inlineStyle = {
        display: this.state.isVisible ? "block" : "none"
    };

    return (

      <div className="App">
          <p> {this.props.isVisible}</p>
        <header className="App-header">
          <p>
            <button type="button" id="Buy" className="btn btn-lg">Buy</button>
            <button type="button" id="Rent" className="btn btn-lg">Rent</button>
          </p>
          <img src={logo} className="App-logo" alt="logo" style={inlineStyle}  />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React . Build RentalAdda
          </a>
            <PropsTest />
        </header>
      </div>
    );
  }
}

export default App;
