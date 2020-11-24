import {
  FIRST_NAME,
  LAST_NAME,
  AGE,
  PHOTO_LINK,
  RESET_CONTACT_DATA,
} from '../constants/constants';

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  age: '',
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
    case RESET_CONTACT_DATA:
      return {...state, firstName: '', lastName: '', age: '', photoLink: ''};
    default:
      return state;
  }
};
export default setCreateContactReducers;
