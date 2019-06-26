export const ADD_TODO = 'ADD_TODO';
export const DEL_TODOS = 'DEL_TODOS';
export const TOG_TODO = 'TOG_TODO';


export const addTodo = (todo) => {
  console.log(`have I even fired?`)
    console.log(todo)
    return {type: 'ADD_TODO', payload: todo}
};

export const delTodos = clearedArray => {
  console.log(`have I also fired?`, clearedArray)

    return {type: 'DEL_TODOS', payload: clearedArray}
};

export const togTodo = toggledArray => {
  console.log(`check me out`)
  
  return {type: 'TOG_TODO', payload: toggledArray}
}