import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from  'redux-thunk';

import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
