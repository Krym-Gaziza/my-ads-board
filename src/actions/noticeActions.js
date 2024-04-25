import { ADD_NOTICE, DELETE_NOTICE } from './types';

export const addNotice = (text) => {
  return {
    type: ADD_NOTICE,
    payload: text
  };
};

export const deleteNotice = (id) => {
  return {
    type: DELETE_NOTICE,
    payload: id
  };
};
