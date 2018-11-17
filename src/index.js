// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// @containers
import App from './components/App/App';

// @reducers
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
