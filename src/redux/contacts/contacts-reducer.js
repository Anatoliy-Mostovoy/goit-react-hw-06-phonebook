import types from './contacts-types';

const contacts = (state = [], action) => {
  switch (action.type) {
    case types.getSubmitData:
      return [...state, action.payload];

    case types.handelDelete:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { contacts, filter };
