// Imports
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './reducers/authReducer';
import namesReducer from './reducers/namesReducer';
import favoritesReducer from './reducers/favoritesReducer';
import layoutReducer from './reducers/layoutReducer';

// Initializations
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  names: namesReducer,
  favorites: favoritesReducer,
  layout: layoutReducer,
});

// Exports
export default rootReducer;
