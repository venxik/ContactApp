import { REFRESH_LANDING_ON, REFRESH_LANDING_OFF } from "../constants/constants";

const refreshLandingOn = () => {
  return {
    type: REFRESH_LANDING_ON
  }
}
const refreshLandingOff = () => {
  return {
    type: REFRESH_LANDING_OFF
  }
}
export {
  refreshLandingOn,
  refreshLandingOff
}
