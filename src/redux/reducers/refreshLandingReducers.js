import { REFRESH_LANDING_OFF, REFRESH_LANDING_ON } from "../constants/constants";

const INITIAL_STATE = {
  isRefresh: false
}

const refreshLandingReducers = (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case REFRESH_LANDING_ON:
      return {...state, isRefresh: true}
    case REFRESH_LANDING_OFF:
      return {...state, isRefresh: false}
    default:
      return state
  }
}
export default refreshLandingReducers
