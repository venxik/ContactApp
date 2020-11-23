import {combineReducers} from 'redux';
import refreshLandingReducers from './refreshLandingReducers';
import getContactsDataReducers from './getContactsDataReducers';
import getContactDetailsReducers from './getContactDetailsReducers';
import setCreateContactReducers from './createContactReducers';

const RootReducers = combineReducers({
  refresh_landing_reducers: refreshLandingReducers,
  get_contacts_reducers: getContactsDataReducers,
  get_contact_details_reducers: getContactDetailsReducers,
  set_create_contact_reducers: setCreateContactReducers,
});
export default RootReducers;
