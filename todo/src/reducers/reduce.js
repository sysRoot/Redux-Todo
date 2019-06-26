import { ADD_TODO, DEL_TODOS, TOG_TODO } from '../actions/activate';

const initialState = {
  TodoData: [{todo: 'some todo', id: 1, completed: false}]
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TODO:
      newState.TodoData = [
        ...newState.TodoData,
        {
          todo: action.payload,
          id: Date.now(),
          completed: false
        }
      ];
      return newState;
    case DEL_TODOS:
      return (newState = { count: newState.count-- });
    case TOG_TODO:
      newState.TodoData = [...action.payload];
      return newState;
    default:
      return state;
  }
};
