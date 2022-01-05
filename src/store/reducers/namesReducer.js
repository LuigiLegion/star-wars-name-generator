// Imports
import { toggledPreloaderActionCreator } from '..';
import {
  isValidName,
  randomNameByRandomRating,
  fullNameScore,
  randomInitial,
  randomElement,
  toast,
} from '../../utils';

// Initial State
const initialState = {
  names: [],
  validInitial: true,
};

// Action Types
const GOT_NAME = 'GOT_NAME';
const ADDED_TO_NAMES = 'ADDED_TO_NAMES';
const REMOVED_FROM_NAMES = 'REMOVED_FROM_NAMES';
const CLEARED_NAMES = 'CLEARED_NAMES';
const TOGGLED_INITIAL_VALIDITY = 'TOGGLED_INITIAL_VALIDITY';

// Action Creators
export const gotNameActionCreator = name => ({
  type: GOT_NAME,
  name,
});

export const addedToNamesActionCreator = name => ({
  type: ADDED_TO_NAMES,
  name,
});

export const removedFromNamesActionCreator = index => ({
  type: REMOVED_FROM_NAMES,
  index,
});

export const clearedNamesActionCreator = () => ({
  type: CLEARED_NAMES,
});

export const toggledInitialValidityActionCreator = status => ({
  type: TOGGLED_INITIAL_VALIDITY,
  status,
});

// Thunk Creators
export const getNameThunkCreator = (firstName, lastName, gender) => {
  return async (dispatch, _, { getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      if (isValidName(firstName) && isValidName(lastName)) {
        const firestore = getFirestore();

        const firstNamesRawData = await firestore
          .collection(`${gender}FirstNames`)
          .doc(firstName[0].toUpperCase())
          .get();
        const lastNamesRawData = await firestore
          .collection('allLastNames')
          .doc(lastName[0].toUpperCase())
          .get();

        const firstNamesWithInitial = firstNamesRawData.data().names;
        const lastNamesWithInitial = lastNamesRawData.data().names;

        const generatedFirstName = randomNameByRandomRating(
          firstName,
          firstNamesWithInitial
        );
        const generatedLastName = randomNameByRandomRating(
          lastName,
          lastNamesWithInitial
        );

        const name = {
          first: generatedFirstName.name,
          last: generatedLastName.name,
          gender,
          input: {
            first: firstName,
            last: lastName,
          },
          scores: {
            first: generatedFirstName.score,
            last: generatedLastName.score,
            full: fullNameScore(generatedFirstName.score, generatedLastName.score),
          },
          matches: {
            first: generatedFirstName.matches,
            last: generatedLastName.matches,
          },
        };

        dispatch(toggledInitialValidityActionCreator(true));
        dispatch(gotNameActionCreator(name));
        toast('Name generated', 'green');
      } else {
        dispatch(toggledInitialValidityActionCreator(false));
        toast('Error! Failed to generate name', 'red');
      }
    } catch (error) {
      console.error(error);
      toast('Error! Failed to generate name', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

export const getRandomNameThunkCreator = gender => {
  return async (dispatch, _, { getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      const firstNameInitial = randomInitial();
      const lastNameInitial = randomInitial();

      const firestore = getFirestore();

      const firstNamesRawData = await firestore
        .collection(`${gender}FirstNames`)
        .doc(firstNameInitial)
        .get();
      const lastNamesRawData = await firestore
        .collection('allLastNames')
        .doc(lastNameInitial)
        .get();

      const firstNamesWithInitial = firstNamesRawData.data().names;
      const lastNamesWithInitial = lastNamesRawData.data().names;

      const generatedFirstName = randomElement(firstNamesWithInitial);
      const generatedLastName = randomElement(lastNamesWithInitial);

      const name = {
        first: generatedFirstName,
        last: generatedLastName,
        gender,
        input: null,
        scores: null,
        matches: null,
      };

      dispatch(gotNameActionCreator(name));
      toast('Name generated', 'green');
    } catch (error) {
      console.error(error);
      toast('Error! Failed to generate name', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

// Reducer
const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_NAME:
    case ADDED_TO_NAMES:
      return {
        ...state,
        names: [...state.names, action.name],
      };

    case REMOVED_FROM_NAMES:
      return {
        ...state,
        names: state.names.filter((_, idx) => idx !== action.index),
      };

    case CLEARED_NAMES:
      return {
        ...state,
        names: [],
      };

    case TOGGLED_INITIAL_VALIDITY:
      return {
        ...state,
        validInitial: action.status,
      };

    default:
      return state;
  }
};

// Exports
export default namesReducer;
