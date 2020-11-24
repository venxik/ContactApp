import { FIRST_NAME, LAST_NAME, AGE, PHOTO_LINK, RESET_CONTACT_DATA } from "../constants/constants";

const setFirstName = (data) => {
  return {
    type: FIRST_NAME,
    payload: data
  }
}
const setLastName = (data) => {
  return {
    type: LAST_NAME,
    payload: data
  }
}
const setAge = (data) => {
  return {
    type: AGE,
    payload: data
  }
}
const setPhotoLink = (data) => {
  return {
    type: PHOTO_LINK,
    payload: data
  }
}

const resetContactData = () => {
  return {
    type: RESET_CONTACT_DATA
  }
}

export {
  setFirstName,
  setLastName,
  setAge,
  setPhotoLink,
  resetContactData
}