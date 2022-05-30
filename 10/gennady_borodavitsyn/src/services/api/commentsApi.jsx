import createInstance from '../instance';
import {
  getSomeCommentsListFromServer,
  getSomeCommentsThunkListFromServer,
  getCommentDetailsThunkFromServer,
} from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getSomeComments = async (config = {}) => {
  const res = await API.get('/comments', config);

  return getSomeCommentsListFromServer(res);
};

export const getSomeCommentsThunk = async (config = {}) => {
  const res = await API.get('/comments', config);

  return getSomeCommentsThunkListFromServer(res);
};

export const getCommentThunk = async (id, config = {}) => {
  const res = await API.get(`/comments/${id}`, config);

  return getCommentDetailsThunkFromServer(res.data);
};
