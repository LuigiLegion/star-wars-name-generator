// Imports
import { toggledPreloaderActionCreator } from '..';
import { randomOptionalName, randomInitial, randomName, toastNotification } from '../../utils';

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
const TOGGLED_INITIAL_VALIDITY = 'TOGGLED_INITIAL_VALIDITY';

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

export const toggledInitialValidityActionCreator = status => ({
  type: TOGGLED_INITIAL_VALIDITY,
  status,
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

        dispatch(toggledInitialValidityActionCreator(true));
        dispatch(gotFirstNameActionCreator(generatedFirstName));
        dispatch(gotLastNameActionCreator(generatedLastName));

        toastNotification('Name Generated Successfully', 'green');
      } else {
        dispatch(toggledInitialValidityActionCreator(false));

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

export const getRandomNamesThunkCreator = gender => {
  return async (dispatch, getState, { getFirestore }) => {
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

      const generatedFirstName = randomName(firstNamesWithInitial);
      const generatedLastName = randomName(lastNamesWithInitial);

      dispatch(gotFirstNameActionCreator(generatedFirstName));
      dispatch(gotLastNameActionCreator(generatedLastName));

      toastNotification('Name Generated Successfully', 'green');
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
