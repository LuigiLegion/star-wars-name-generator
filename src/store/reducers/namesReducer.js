import { getName } from '../../functions/generate';

// Initial State
const initialState = {
  firstNames: [],
  lastNames: [],
  // planetNames: [],
  disabledClear: true,
  validInitial: true,
};

// Actions
const GOT_FIRST_NAME = 'GOT_FIRST_NAME';
const GOT_LAST_NAME = 'GOT_LAST_NAME';
const CLEARED_ALL_NAMES = 'CLEARED_ALL_NAMES';
const UPDATED_INITIAL_VALIDITY = 'UPDATED_INITIAL_VALIDITY';

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

export const updatedInitialValidity = () => ({
  type: UPDATED_INITIAL_VALIDITY,
});

// Thunk Creators
export const getFirstNameThunkCreator = (firstName, gender) => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      // console.log('firstName in getFirstNameThunkCreator: ', firstName);
      // console.log('gender in getFirstNameThunkCreator: ', gender);

      const firstNameInitial = firstName[0];
      const upperCasedFirstNameInitial = firstNameInitial.toUpperCase();
      const lowerCasedFirstNameInitial = firstNameInitial.toLowerCase();

      if (upperCasedFirstNameInitial !== lowerCasedFirstNameInitial) {
        const firestore = getFirestore();

        const firstNamesRaw = await firestore
          .collection(`${gender}FirstNames`)
          .doc(firstNameInitial)
          .get();

        const { names } = firstNamesRaw.data();

        // console.log('names in getFirstNameThunkCreator: ', names);

        const generatedFirstName = getName(firstName, names);

        // console.log(
        //   'generatedFirstName in getFirstNameThunkCreator: ',
        //   generatedFirstName
        // );

        dispatch(gotFirstNameActionCreator(generatedFirstName));
      } else {
        dispatch(updatedInitialValidity());
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const getLastNameThunkCreator = lastName => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      // console.log('lastName in getLastNameThunkCreator: ', lastName);

      const lastNameInitial = lastName[0];
      const upperCasedLastNameInitial = lastNameInitial.toUpperCase();
      const lowerCasedLastNameInitial = lastNameInitial.toLowerCase();

      if (upperCasedLastNameInitial !== lowerCasedLastNameInitial) {
        const firestore = getFirestore();

        const lastNamesRaw = await firestore
          .collection('allLastNames')
          .doc(upperCasedLastNameInitial)
          .get();

        const { names } = lastNamesRaw.data();

        // console.log('names in getLastNameThunkCreator: ', names);

        const generatedLastName = getName(lastName, names);

        // console.log(
        //   'generatedLastName in getLastNameThunkCreator: ',
        //   generatedLastName
        // );

        dispatch(gotLastNameActionCreator(generatedLastName));
      } else {
        dispatch(updatedInitialValidity());
      }
    } catch (error) {
      console.error(error);
    }
  };
};

// Reducer
const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FIRST_NAME:
      // console.log('action.name in GOT_FIRST_NAMES: ', action.name);

      return {
        ...state,
        firstNames: [...state.firstNames, action.name],
        disabledClear: false,
        validInitial: true,
      };

    case GOT_LAST_NAME:
      // console.log('action.name in GOT_LAST_NAME: ', action.name);

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
        validInitial: true,
      };

    case UPDATED_INITIAL_VALIDITY:
      return { ...state, validInitial: false };

    default:
      return state;
  }
};

export default namesReducer;
