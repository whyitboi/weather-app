import { addTodo } from "./projects.js";
export const moveTodo = (projectFrom, projectTo, Todo) => {
  projectFrom.todoLists.forEach((todo) => {
    const index = projectFrom.todoLists.indexOf(Todo);
    //check todo exists
    if (index === -1) return;

    const todoToMove = projectFrom.todoLists.splice(index, 1)[0]; //returns array of spliced items.
    addTodo(projectTo, todoToMove);
    // console.log(`Found at index ${index}`);
  });
};
