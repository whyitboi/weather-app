import { store, retrieve } from "./storage.js";
import { Project, addTodo, deleteTodo } from "./projects.js";
import { User, addProjects } from "./users.js";
import {
  Todo,
  editTodoDes,
  editTodoDate,
  isCompleted,
  changePriority,
  getPriority,
} from "./todos.js";

let user = retrieve();

//switch to dynamic creation
const myProject = new Project(
  "The Odin Project",
  "This will hold all the todolist for the odin project",
);
const myProject1 = new Project("Second", "Test 2nd project");

//switch this to dynamic creation
const todo = new Todo(
  "Study Javascript",
  "Complete Todo List",
  "2026-09-05",
  2,
);

if (!user) {
  user = new User("Guest");
  addProjects(user, myProject, myProject1);
  addTodo(myProject1, todo);
  store(user);
}
//const currentProject = user.userProjectsArray[0];
const projectsArray = user.userProjectsArray;

function addTodoToProject(project, ...todo) {
  addTodo(project, ...todo);
  store(user);
}
function deleteTodoFromProject(project, ...todo) {
  deleteTodo(project, ...todo);
  store(user);
}
function editTodoToProject(todo, desc, date, priority) {
  //implement priority here

  editTodoDes(todo, desc);
  editTodoDate(todo, date);
  changePriority(todo, Number(priority));
  store(user);
}
function isCompletedTodo(todo) {
  isCompleted(todo);
  store(user);
}
function getTodoPriority(todo) {
  return getPriority(todo.priority);
}

function addNewUserProject(project) {
  addProjects(user, project);
  store(user);
}

export {
  addTodoToProject,
  deleteTodoFromProject,
  editTodoToProject,
  addNewUserProject,
  isCompletedTodo,
  getTodoPriority,
  user,
  projectsArray,
};
