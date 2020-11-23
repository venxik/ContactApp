import { GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILED } from "../constants/constants";

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  contactsData: [],
  isFetching: false,
  error: false
};

const getContactsDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_CONTACTS:
      return {...state, isFetching: true}
    case GET_CONTACTS_SUCCESS:
      return {...state, isFetching: false, contactsData: action.payload.data}
    case GET_CONTACTS_FAILED:
      return {...state, isFetching: false, error: true}
    default:
      return state
  }
}
export default getContactsDataReducers
