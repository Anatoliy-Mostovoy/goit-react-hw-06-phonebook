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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSubmitData, handelDelete };
