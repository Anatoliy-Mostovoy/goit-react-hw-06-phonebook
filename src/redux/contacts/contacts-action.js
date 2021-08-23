import types from './contacts-types';

const getSubmitData = data => {
  return {
    type: types.getSubmitData,
    payload: data,
  };
};

const handelDelete = data => {
  return { type: types.handelDelete, payload: data };
};

const changeFilterValue = value => {
  return { type: types.changeFilterValue, payload: value };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSubmitData, handelDelete, changeFilterValue };
