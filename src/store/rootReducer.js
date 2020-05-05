import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import namesReducer from './reducers/namesReducer';
import layoutReducer from './reducers/layoutReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  names: namesReducer,
  layout: layoutReducer,
});

export default rootReducer;
