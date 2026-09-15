// to change the completed status of the todo
export const markComplete = (todo) => {
  todo.completed = true;
  return todo;
};
