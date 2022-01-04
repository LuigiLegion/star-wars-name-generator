// Imports
import {
  signInWithGoogle,
  clearedFavoritesActionCreator,
  toggledPreloaderActionCreator,
} from '..';
import { toast } from '../../utils';

// Initial State
const initialState = {
  signInError: null,
  signOutError: null,
};

// Action Types
const SIGNED_IN_SUCCESS = 'SIGNED_IN_SUCCESS';
const SIGNED_IN_ERROR = 'SIGNED_IN_ERROR';
const SIGNED_OUT_SUCCESS = 'SIGNED_OUT_SUCCESS';
const SIGNED_OUT_ERROR = 'SIGNED_OUT_ERROR';

// Action Creators
const signedInSuccessActionCreator = () => ({
  type: SIGNED_IN_SUCCESS,
});

const signedInErrorActionCreator = error => ({
  type: SIGNED_IN_ERROR,
  error,
});

const signedOutSuccessActionCreator = () => ({
  type: SIGNED_OUT_SUCCESS,
});

const signedOutErrorActionCreator = error => ({
  type: SIGNED_OUT_ERROR,
  error,
});

// Thunk Creators
export const signInThunkCreator = () => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      const firebase = getFirebase();
      const firestore = getFirestore();

      await signInWithGoogle();

      const {
        currentUser: { uid, email, displayName, photoURL },
      } = firebase.auth();

      const userDataRaw = await firestore
        .collection('users')
        .doc(uid)
        .get();
      const userData = userDataRaw.data();

      if (!userData) {
        await firestore
          .collection('users')
          .doc(uid)
          .set({
            email,
            fullName: displayName,
            imageUrl: photoURL,
            favorites: [],
          });
      }

      dispatch(signedInSuccessActionCreator());
    } catch (error) {
      console.error(error);
      dispatch(signedInErrorActionCreator(error));
      toast('Error! Failed to sign in', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

export const signOutThunkCreator = () => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      const firebase = getFirebase();

      await firebase.auth().signOut();

      dispatch(clearedFavoritesActionCreator());
      dispatch(signedOutSuccessActionCreator());
    } catch (error) {
      console.error(error);
      dispatch(signedOutErrorActionCreator(error));
      toast('Error! Failed to sign out', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_IN_SUCCESS:
      return {
        ...state,
        signInError: null,
      };

    case SIGNED_IN_ERROR:
      return {
        ...state,
        signInError: action.error.message,
      };

    case SIGNED_OUT_SUCCESS:
      return {
        ...state,
        signOutError: null,
      };

    case SIGNED_OUT_ERROR:
      return {
        ...state,
        signOutError: action.error.message,
      };

    default:
      return state;
  }
};

// Exports
export default authReducer;
