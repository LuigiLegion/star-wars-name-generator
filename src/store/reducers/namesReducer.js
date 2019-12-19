import { maleFirstNames } from '../../data/sets/sorted/male/male-first-names';
import { femaleFirstNames } from '../../data/sets/sorted/female/female-first-names';
import { allLastNames } from '../../data/sets/sorted/all/all-last-names';
import { allFirstNames } from '../../data/sets/sorted/all/all-first-names';

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
  return dispatch => {
    try {
      // console.log('firstName in getFirstNameThunkCreator: ', firstName);
      // console.log('gender in getFirstNameThunkCreator: ', gender);

      let generatedFirstName;

      if (gender === 'Male') {
        generatedFirstName = getName(firstName, maleFirstNames);
      } else if (gender === 'Female') {
        generatedFirstName = getName(firstName, femaleFirstNames);
      } else {
        generatedFirstName = getName(firstName, allFirstNames);
      }

      // console.log(
      //   'generatedFirstName in getFirstNameThunkCreator: ',
      //   generatedFirstName
      // );

      dispatch(gotFirstNameActionCreator(generatedFirstName));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getLastNameThunkCreator = lastName => {
  return dispatch => {
    try {
      // console.log('lastName in getLastNameThunkCreator: ', lastName);

      let generatedLastName = getName(lastName, allLastNames);

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
