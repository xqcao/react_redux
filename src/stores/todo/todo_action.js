import * as types from "./todo_type";

export const addTodo = (x) => {
  return {
    type: types.TODO_ADD,
    payload: x,
  };
};

export const removeTodo = (x) => {
  return {
    type: types.TODO_REMOVE,
    payload: x,
  };
};
export const updateTodo = (x) => {
  return {
    type: types.TODO_UPDATE,
    payload: x,
  };
};
