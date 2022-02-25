import createInstance from '../instance';
import { getTodoListFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getTodoList = async (config = {}) => {
  const res = await API.get('/items.json', config);

  return getTodoListFromServer(res);
};

export const addTodo = async (body) => {
  await API.post('/items', body);
  const res = await API.get('/items.json');

  return getTodoListFromServer(res);
};

export const deleteTodo = async (id) => {
  await API.delete(`/items/${id}.json`);
  const res = await API.get('/items.json');

  return getTodoListFromServer(res);
};

export const updateTodo = async ({ id, title }) => {
  await API.patch(`/items/${id}`, { title: title });
  const res = await API.get('/items.json');

  return getTodoListFromServer(res);
};
