export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = (todo) => {
  console.log(`have I even fired?`)
    console.log(todo)
    return {type: 'ADD_TODO', payload: todo}
};

export const delTodo = counter => {
  console.log(`have I also fired?`)

    return {type: 'DEL_TODO'}
};
