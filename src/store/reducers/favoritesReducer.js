// Imports
import {
  addedToNamesActionCreator,
  removedFromNamesActionCreator,
  toggledPreloaderActionCreator,
} from '..';
import { toast } from '../../utils';

// Initial State
const initialState = {
  favorites: [],
};

// Action Types
const GOT_FAVORITES = 'GOT_FAVORITES';
const ADDED_TO_FAVORITES = 'ADDED_TO_FAVORITES';
const REMOVED_FROM_FAVORITES = 'REMOVED_FROM_FAVORITES';
const CLEARED_FAVORITES = 'CLEARED_FAVORITES';

// Action Creators
export const gotFavoritesActionCreator = favorites => ({
  type: GOT_FAVORITES,
  favorites,
});

export const addedToFavoritesActionCreator = favorites => ({
  type: ADDED_TO_FAVORITES,
  favorites,
});

export const removedFromFavoritesActionCreator = favorites => ({
  type: REMOVED_FROM_FAVORITES,
  favorites,
});

export const clearedFavoritesActionCreator = () => ({
  type: CLEARED_FAVORITES,
});

// Thunk Creators
// export const getFavoritesThunkCreator = () => {
export const getFavoritesThunkCreator = uid => {
  // return async (dispatch, getState, { getFirebase, getFirestore }) => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      // const firebase = getFirebase();

      // const { currentUser } = firebase.auth();

      // if (currentUser) {
      if (uid) {
        const firestore = getFirestore();

        const userDataRaw = await firestore
          .collection('users')
          // .doc(currentUser.uid)
          .doc(uid)
          .get();
        const { favorites } = userDataRaw.data();

        dispatch(gotFavoritesActionCreator(favorites));
      }
    } catch (error) {
      console.error(error);
      toast('Error! Failed to retrieve favorites', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

export const addToFavoritesThunkCreator = (name, index) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      const firebase = getFirebase();
      const firestore = getFirestore();

      const { currentUser: { uid } } = firebase.auth();
      const { favorites } = getState().favorites;

      const updatedFavorites = [
        ...favorites,
        {
          ...name,
          createdAt: Date.now(),
        },
      ];

      await firestore
        .collection('users')
        .doc(uid)
        .set({ favorites: updatedFavorites }, { merge: true });

      dispatch(addedToFavoritesActionCreator(updatedFavorites));
      dispatch(removedFromNamesActionCreator(index));
      toast('Name added to favorites', 'green');
    } catch (error) {
      console.error(error);
      toast('Error! Failed to add name to favorites', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

export const removeFromFavoritesThunkCreator = (name, index) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      const firebase = getFirebase();
      const firestore = getFirestore();

      const { currentUser: { uid } } = firebase.auth();
      const { favorites } = getState().favorites;

      const updatedFavorites = favorites.filter((_, idx) => idx !== index);

      await firestore
        .collection('users')
        .doc(uid)
        .set({ favorites: updatedFavorites }, { merge: true });

      dispatch(removedFromFavoritesActionCreator(updatedFavorites));
      dispatch(addedToNamesActionCreator(name));
      toast('Name removed from favorites', 'green');
    } catch (error) {
      console.error(error);
      toast('Error! Failed to remove name from favorites', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

// Reducer
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FAVORITES:
    case ADDED_TO_FAVORITES:
    case REMOVED_FROM_FAVORITES:
      return {
        favorites: action.favorites,
      };

    case CLEARED_FAVORITES:
      return {
        favorites: [],
      };

    default:
      return state;
  }
};

// Exports
export default favoritesReducer;
