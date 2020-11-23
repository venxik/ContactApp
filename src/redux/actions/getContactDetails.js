import { GET_CONTACT_DETAILS_FAILED, GET_CONTACT_DETAILS_SUCCESS, GET_CONTACT_DETAILS } from "../constants/constants";
import { fetch_link } from "../../Constant/Constant";

const fetchContactDetails = (id) => {
  return async (dispatch) => {
    dispatch(getContactDetails())
    try{
      const res = await fetch(`${fetch_link}contact/${id}`, {
        method: 'GET',
      });
      const json = await res.json();
      return (dispatch(successGetContactDetails(json)));
    } catch (err) {
      return dispatch(failedGetContactDetails(err));
    }
  }
}

const getContactDetails = () => {
  return {
    type: GET_CONTACT_DETAILS
  }
}
const successGetContactDetails = (data) => {
  return {
    type: GET_CONTACT_DETAILS_SUCCESS,
    payload: data
  }
}
const failedGetContactDetails = () => {
  return {
    type: GET_CONTACT_DETAILS_FAILED,
  }
}
export {
  fetchContactDetails,
}
