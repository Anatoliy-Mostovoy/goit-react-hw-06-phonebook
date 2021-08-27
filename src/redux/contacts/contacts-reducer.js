import { createReducer } from '@reduxjs/toolkit';

const contacts = createReducer([], {
  'contacts/getSubmitData': (state, action) => {
    return [...state, action.payload];
  },
  'contacts/handelDelete': (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

// const contacts = (state = [], action) => {
//   switch (action.type) {
//     case types.getSubmitData:
//       return [...state, action.payload];

//     case types.handelDelete:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  'contacts/changeFilterValue': (state, action) => {
    return action.payload;
  },
});

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case types.changeFilterValue:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { contacts, filter };
