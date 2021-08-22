import { createStore, combineReducers } from 'redux';
import contactReducer from './contacts/contacts-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const mainReducer = combineReducers({
  filter: contactReducer.filter,
  contacts: contactReducer.contacts,
});

const store = createStore(mainReducer, composeWithDevTools());

export default store;
