import { GET_CONTACT_DETAILS, GET_CONTACT_DETAILS_SUCCESS, GET_CONTACT_DETAILS_FAILED } from "../constants/constants";

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  contactDetails: [],
  isFetching: false,
  error: false
};

const getContactDetailsDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_CONTACT_DETAILS:
      return {...state, isFetching: true}
    case GET_CONTACT_DETAILS_SUCCESS:
      return {...state, isFetching: false, contactDetails: action.payload.data}
    case GET_CONTACT_DETAILS_FAILED:
      return {...state, isFetching: false, error: true}
    default:
      return state
  }
}

export default getContactDetailsDataReducers