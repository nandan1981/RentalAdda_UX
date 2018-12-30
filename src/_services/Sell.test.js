import React from 'react';
import ReactDOM from 'react-dom';
import Sell from './Sell';
import { expect } from 'chai';


describe("Testing the sell component",function () {
    it("test the payment feature",function () {
        var sellComponent = document.createElement('div');
        ReactDOM.render(<Sell/>,sellComponent);
        ReactDOM.unmountComponentAtNode(sellComponent);
    });
});