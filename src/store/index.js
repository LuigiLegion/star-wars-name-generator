// Imports
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirebase } from 'react-redux-firebase';
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from 'redux-firestore';

import firebaseConfig from '../config/firebaseConfig';
import rootReducer from './rootReducer';

// Initializations
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ getFirebase, getFirestore }),
    createLogger({ collapsed: true })
  ),
  reduxFirestore(firebase, firebaseConfig)
);

const store = createStore(rootReducer, middleware);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// Exports
export default store;
export * from './reducers/layoutReducer';
export * from './reducers/namesReducer';
