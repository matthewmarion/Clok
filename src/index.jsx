import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';

const Store = createStore();


ReactDOM.render(<App />, document.getElementById('root'));
