// Imports
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import namesReducer from './reducers/namesReducer';
import layoutReducer from './reducers/layoutReducer';

// Initializations
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  names: namesReducer,
  layout: layoutReducer,
});

// Exports
export default rootReducer;
