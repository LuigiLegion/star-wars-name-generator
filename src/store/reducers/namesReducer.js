// Imports
import { toggledPreloaderActionCreator } from '..';
import { randomOptionalName, toastNotification } from '../../utils';

// Initial State
const initialState = {
  firstNames: [],
  lastNames: [],
  // planetNames: [],
  disabledClear: true,
  validInitial: true,
};

// Action Types
const GOT_FIRST_NAME = 'GOT_FIRST_NAME';
const GOT_LAST_NAME = 'GOT_LAST_NAME';
const CLEARED_ALL_NAMES = 'CLEARED_ALL_NAMES';
const UPDATED_INITIAL_VALIDITY_TRUE = 'UPDATED_INITIAL_VALIDITY_TRUE';
const UPDATED_INITIAL_VALIDITY_FALSE = 'UPDATED_INITIAL_VALIDITY_FALSE';

// Action Creators
export const gotFirstNameActionCreator = name => ({
  type: GOT_FIRST_NAME,
  name,
});

export const gotLastNameActionCreator = name => ({
  type: GOT_LAST_NAME,
  name,
});

export const clearedAllNamesActionCreator = () => ({
  type: CLEARED_ALL_NAMES,
});

export const updatedInitialValidityTrue = () => ({
  type: UPDATED_INITIAL_VALIDITY_TRUE,
});

export const updatedInitialValidityFalse = () => ({
  type: UPDATED_INITIAL_VALIDITY_FALSE,
});

// Thunk Creators
export const getNamesThunkCreator = (firstName, lastName, gender) => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      dispatch(toggledPreloaderActionCreator(true));

      const firstNameInitial = firstName[0];
      const upperCasedFirstNameInitial = firstNameInitial.toUpperCase();
      const lowerCasedFirstNameInitial = firstNameInitial.toLowerCase();
      const firstNameInitialIsLetterCheck =
        upperCasedFirstNameInitial !== lowerCasedFirstNameInitial;

      const lastNameInitial = lastName[0];
      const upperCasedLastNameInitial = lastNameInitial.toUpperCase();
      const lowerCasedLastNameInitial = lastNameInitial.toLowerCase();
      const lastNameInitialIsLetterCheck =
        upperCasedLastNameInitial !== lowerCasedLastNameInitial;

      if (firstNameInitialIsLetterCheck && lastNameInitialIsLetterCheck) {
        const firestore = getFirestore();

        const firstNamesRawData = await firestore
          .collection(`${gender}FirstNames`)
          .doc(upperCasedFirstNameInitial)
          .get();
        const lastNamesRawData = await firestore
          .collection('allLastNames')
          .doc(upperCasedLastNameInitial)
          .get();

        const firstNamesWithInitial = firstNamesRawData.data().names;
        const lastNamesWithInitial = lastNamesRawData.data().names;

        const generatedFirstName = randomOptionalName(
          firstName,
          firstNamesWithInitial
        );
        const generatedLastName = randomOptionalName(
          lastName,
          lastNamesWithInitial
        );

        dispatch(updatedInitialValidityTrue());
        dispatch(gotFirstNameActionCreator(generatedFirstName));
        dispatch(gotLastNameActionCreator(generatedLastName));

        toastNotification('Name Generated Successfully', 'green');
      } else {
        dispatch(updatedInitialValidityFalse());

        toastNotification('Error! Unable To Generate Names', 'red');
      }
    } catch (error) {
      console.error(error);
      toastNotification('Error! Unable To Generate Names', 'red');
    } finally {
      dispatch(toggledPreloaderActionCreator(false));
    }
  };
};

// Reducer
const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FIRST_NAME:
      return {
        ...state,
        firstNames: [...state.firstNames, action.name],
        disabledClear: false,
      };

    case GOT_LAST_NAME:
      return {
        ...state,
        lastNames: [...state.lastNames, action.name],
        disabledClear: false,
      };

    case CLEARED_ALL_NAMES:
      return {
        ...state,
        firstNames: [],
        lastNames: [],
        disabledClear: true,
      };

    case UPDATED_INITIAL_VALIDITY_TRUE:
      return {
        ...state,
        validInitial: true,
      };

    case UPDATED_INITIAL_VALIDITY_FALSE:
      return {
        ...state,
        validInitial: false,
      };

    default:
      return state;
  }
};

// Exports
export default namesReducer;
