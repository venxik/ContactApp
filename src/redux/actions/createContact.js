import { FIRST_NAME, LAST_NAME, AGE, PHOTO_LINK } from "../constants/constants";

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

export {
  setFirstName,
  setLastName,
  setAge,
  setPhotoLink
}