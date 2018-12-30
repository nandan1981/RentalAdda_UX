import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './_components/App';
import * as serviceWorker from './serviceWorker';

import Sell from './_services/Sell';

var message = "Yo yo";

ReactDOM.render(<Sell titleMessage={message}/>, document.getElementById('root'));
//ReactDOM.render(<App titleMessage={message}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
