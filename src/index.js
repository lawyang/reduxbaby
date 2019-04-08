import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './redux/reducers';
import HomePage from './components/Global/Page';

const preloadedState = {};
const middlewares = [];
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middlewares, logger),
);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route exact path='/' component={App} />
            <Route path='/home' component={HomePage} />
        </Provider>
    </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
