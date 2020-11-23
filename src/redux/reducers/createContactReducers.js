import {FIRST_NAME, LAST_NAME, AGE, PHOTO_LINK} from '../constants/constants';

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  age: 0,
  photoLink: '',
};

const setCreateContactReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return {...state, firstName: action.payload};
    case LAST_NAME:
      return {...state, lastName: action.payload};
    case AGE:
      return {...state, age: action.payload};
    case PHOTO_LINK:
      return {...state, photoLink: action.payload};
    default:
      return state;
  }
};
export default setCreateContactReducers;
