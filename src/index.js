import React from 'react';
import ReactDOM from 'react-dom';
import {loadState} from './services/appState'
import thunk from 'redux-thunk'
import AppRouter from './components/AppRouter'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import * as reducers from './reducers'
import './styles/main.scss';
import {unregister} from './registerServiceWorker';
import WebService from './services/Webservice'

let store;


const init = async () => {
    const combinedReducers = combineReducers({...reducers});
    const preLoadedState = await loadState();
    const middleware = applyMiddleware(thunk);

    let enhancer;
    if(process.env.NODE_ENV === 'development') {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(middleware)
    }
    else
        enhancer = middleware;

    try {
        store = createStore(combinedReducers, preLoadedState, enhancer);
    } catch(e) {
        store = createStore(combinedReducers, null, enhancer);
    }

    window.WebService = new WebService(store);

    ReactDOM.render(

        <Provider store={store}>
            <AppRouter/>
        </Provider>,
        document.getElementById('root')
    );
};

init();
unregister();
