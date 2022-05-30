import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../stores/todo/todo_action";

import { v4 as uuidv4 } from "uuid";

const Todo = (props) => {
  const defaultTodo = {
    id: 0,
    name: "",
    description: "",
  };
  const [editFlag, setEditFlag] = useState(false);
  const { todoList, addTodo, removeTodo, updateTodo } = props;
  const [oneTodo, setOneTodo] = useState(defaultTodo);
  const handleClickAdd = () => {
    setOneTodo({ ...oneTodo, id: uuidv4() });
    const id = uuidv4();
    // console.log(oneTodo, id);
    addTodo(oneTodo, id);
    setOneTodo(defaultTodo);
  };

  const handleClickUpdate = (it) => {
    setEditFlag(true);
    setOneTodo(it);
    // console.log(it);
  };
  const handleClickEdit = () => {
    updateTodo(oneTodo);
    setOneTodo(defaultTodo);
    setEditFlag(false);
  };
  return (
    <div>
      <h2>Todo use redux</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          style={{ marginLeft: "35px" }}
          value={oneTodo.name}
          onChange={(e) => setOneTodo({ ...oneTodo, name: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="description">description:</label>

        <input
          type="text"
          name="description"
          value={oneTodo.description}
          onChange={(e) =>
            setOneTodo({ ...oneTodo, description: e.target.value })
          }
        />
        <br />
        <br />
        {!editFlag ? (
          <button onClick={handleClickAdd}>Add</button>
        ) : (
          <button onClick={handleClickEdit}>Edit One</button>
        )}
      </div>
      <hr />
      <ol>
        {todoList.length > 0 ? (
          todoList.map((el, idx) => (
            <li key={el.id + " " + idx}>
              name: {el.name}, description: {el.description}
              <button
                style={{ marginLeft: "5px" }}
                onClick={() => removeTodo(el.id)}
              >
                Remove this
              </button>
              <button
                style={{ marginLeft: "5px" }}
                onClick={() => handleClickUpdate(el)}
              >
                Update
              </button>
            </li>
          ))
        ) : (
          <li>Empty list</li>
        )}
      </ol>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todoReduce,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (x, i) => {
      x.id = i;
      dispatch(actions.addTodo(x));
    },
    removeTodo: (x) => dispatch(actions.removeTodo(x)),
    updateTodo: (x) => dispatch(actions.updateTodo(x)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
