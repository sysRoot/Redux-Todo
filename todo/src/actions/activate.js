export const ADD_TODO = 'ADD_TODO';
export const DEL_TODOS = 'DEL_TODOS';
export const TOG_TODO = 'TOG_TODO';


export const addTodo = (todo) => {
  console.log(`have I even fired?`)
    console.log(todo)
    return {type: 'ADD_TODO', payload: todo}
};

export const delTodos = todos => {
  console.log(`have I also fired?`)

    return {type: 'DEL_TODO'}
};

export const togTodo = toggledArray => {
  console.log(`check me out`)
  
  return {type: 'TOG_TODO', payload: toggledArray}
}