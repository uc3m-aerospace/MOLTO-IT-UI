import React from 'react';
import ReactDOM from 'react-dom';
import { loadState } from './services/appState';
import thunk from 'redux-thunk';
import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';
import './styles/main.scss';
import { unregister } from './registerServiceWorker';
import WebService from './services/Webservice';
import { ThemeProvider } from '@chakra-ui/core';
import { theme } from '@chakra-ui/core';

let store;

const init = async () => {
  const combinedReducers = combineReducers({ ...reducers });
  const preLoadedState = await loadState();
  const middleware = applyMiddleware(thunk);

  let enhancer;
  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(middleware);
  } else enhancer = middleware;

  try {
    store = createStore(combinedReducers, preLoadedState, enhancer);
  } catch (e) {
    store = createStore(combinedReducers, null, enhancer);
  }

  window.WebService = new WebService(store);

  // Let's say you want to add custom colors
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: {
        50: '#e3eaff',
        100: '#b3c0ff',
        200: '#8296fd',
        300: '#516cfb',
        400: '#2242f8',
        500: '#3a59fa',
        600: '#2242f8',
        700: '#01177d',
        800: '#000e4e',
        900: '#00051f'
      }
    }
  };
  ReactDOM.render(
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>,
    document.getElementById('root')
  );
};

init();
unregister();
