import * as types from "./todo_type";

const defaultState = [
  { id: 1, name: "shopping", description: "store or online shopping" },
  { id: 2, name: "sum's club 2022", description: "go sum's club store" },
];

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [...state, action.payload];
    case types.TODO_REMOVE:
      const s1 = state.filter((x) => x.id !== action.payload);
      return s1;
    case types.TODO_UPDATE:
      return state.map((x) => {
        if (x.id === action.payload.id) {
          x.description = action.payload.description;
          x.name = action.payload.name;
        }
        return x;
      });
    default:
      return state;
  }
};

export default reduce;
