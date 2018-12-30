import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect('abc').to.equal('abc');
});

it('renders but crashes', () =>{
    let div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div)
});

it('renders and contains', () =>{
 const div = shallow(<App/>);
 const welcome = 'Learn React . Build RentalAdda';
 expect(div.contains(welcome)).to.equal(true);
});

it('renders and does not contain', () =>{
    const div = shallow(<App/>);
    const welcome = 'Learn React ..... Build RentalAdda';
    expect(div.contains(welcome)).to.equal(false);
});
