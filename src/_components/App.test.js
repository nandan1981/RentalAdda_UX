import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import chai from 'chai';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders but crashes', () =>{
    let div = document.createElement('div');
    ReactDOM.render(<App/>, div).;
    ReactDOM.unmountComponentAtNode(div)
});

