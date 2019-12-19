// Initial State
const initialState = {
  firstNames: [],
};

// Action
const GOT_FIRST_NAME = 'GOT_FIRST_NAME';

// Action Creators
export const gotFirstNameActionCreator = firstName => ({
  type: GOT_FIRST_NAME,
  firstName,
});

// Reducer
const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FIRST_NAME:
      console.log('action.firstName in GOT_FIRST_NAMES: ', action.firstName);
      return { ...state, firstNames: [...state.firstNames, action.firstName] };

    default:
      return state;
  }
};

export default namesReducer;
