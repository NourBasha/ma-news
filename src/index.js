import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootReducer from './store/reducers';
import '../src/scss/index.scss';
import rootSaga from './store/sagas';

import GlobalState from './store/contextState/global_state';


const sagaMiddleware = createSagaMiddleware();

 const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));

 sagaMiddleware.run(rootSaga);

ReactDOM.render(

    <Provider store={store}>
          <GlobalState>             
                <App />
          </GlobalState>
    </Provider>
           ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
