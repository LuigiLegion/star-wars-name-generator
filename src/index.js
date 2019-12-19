import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './store/reducers/rootReducer';
import firebase from './config/fbConfig';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ getFirebase, getFirestore }),
      createLogger({ collapsed: true })
    ),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
