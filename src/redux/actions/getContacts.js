import { GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILED } from "../constants/constants";
import { fetch_link } from "../../Constant/Constant";

const fetchContacts = () => {
  return async (dispatch) => {
    dispatch(getContacts())
    try{
      const res = await fetch(`${fetch_link}contact`, {
        method: 'GET',
      });
      const json = await res.json();
      return (dispatch(successGetContacts(json)));
    } catch (err) {
      return dispatch(failedGetContacts(err));
    }
  }
}

const getContacts = () => {
  return {
    type: GET_CONTACTS
  }
}
const successGetContacts = (data) => {
  return {
    type: GET_CONTACTS_SUCCESS,
    payload: data
  }
}
const failedGetContacts = () => {
  return {
    type: GET_CONTACTS_FAILED,
  }
}
export {
  fetchContacts,
}
