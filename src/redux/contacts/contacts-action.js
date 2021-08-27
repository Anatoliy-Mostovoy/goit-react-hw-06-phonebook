import { createAction } from '@reduxjs/toolkit';

const getSubmitData = createAction('contacts/getSubmitData');

// const getSubmitData = data => {
//   return {
//     type: types.getSubmitData,
//     payload: data,
//   };
// };

const handelDelete = createAction('contacts/handelDelete');

// const handelDelete = data => {
//   return { type: types.handelDelete, payload: data };
// };

const changeFilterValue = createAction('contacts/changeFilterValue');

// const changeFilterValue = value => {
//   return { type: types.changeFilterValue, payload: value };
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSubmitData, handelDelete, changeFilterValue };
