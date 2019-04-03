import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, applyMiddleware)

ReactDOM.render(<App />, document.getElementById('root'));
