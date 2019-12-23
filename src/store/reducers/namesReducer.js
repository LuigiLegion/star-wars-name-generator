// import { maleFirstNames } from '../../data/sets/sorted/male/male-first-names';
// import { femaleFirstNames } from '../../data/sets/sorted/female/female-first-names';
// import { allLastNames } from '../../data/sets/sorted/all/all-last-names';
// import { allFirstNames } from '../../data/sets/sorted/all/all-first-names';

import { getName } from '../../functions/generate';

// Initial State
const initialState = {
  firstNames: [],
  lastNames: [],
  // planetNames: [],
  disabledClear: true,
};

// Actions
const GOT_FIRST_NAME = 'GOT_FIRST_NAME';
const GOT_LAST_NAME = 'GOT_LAST_NAME';
const CLEARED_ALL_NAMES = 'CLEARED_ALL_NAMES';

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

// Thunk Creators
export const getFirstNameThunkCreator = (firstName, gender) => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      // console.log('firstName in getFirstNameThunkCreator: ', firstName);
      // console.log('gender in getFirstNameThunkCreator: ', gender);

      const firestore = getFirestore();

      const firstNameInitial = firstName[0].toUpperCase();

      console.log(
        'firstNameInitial in getFirstNameThunkCreator: ',
        firstNameInitial
      );

      const firstNamesRaw = await firestore
        .collection(`${gender}FirstNames`)
        .doc(firstNameInitial)
        .get();

      const { names } = firstNamesRaw.data();

      console.log('names in getFirstNameThunkCreator: ', names);

      const generatedFirstName = getName(firstName, names);

      console.log(
        'generatedFirstName in getFirstNameThunkCreator: ',
        generatedFirstName
      );

      dispatch(gotFirstNameActionCreator(generatedFirstName));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getLastNameThunkCreator = lastName => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      // console.log('lastName in getLastNameThunkCreator: ', lastName);

      const firestore = getFirestore();

      const lastNameInitial = lastName[0].toUpperCase();

      console.log(
        'lastNameInitial in getFirstNameThunkCreator: ',
        lastNameInitial
      );

      const lastNamesRaw = await firestore
        .collection('allLastNames')
        .doc(lastNameInitial)
        .get();

      const { names } = lastNamesRaw.data();

      console.log('names in getFirstNameThunkCreator: ', names);

      const generatedLastName = getName(lastName, names);

      // console.log(
      //   'generatedLastName in getLastNameThunkCreator: ',
      //   generatedLastName
      // );

      dispatch(gotLastNameActionCreator(generatedLastName));
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
      };

    case GOT_LAST_NAME:
      // console.log('action.name in GOT_LAST_NAME: ', action.name);

      return {
        ...state,
        lastNames: [...state.lastNames, action.name],
        disabledClear: false,
      };

    case CLEARED_ALL_NAMES:
      return { ...state, firstNames: [], lastNames: [], disabledClear: true };

    default:
      return state;
  }
};

export default namesReducer;
