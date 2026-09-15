class Project {
  constructor(name, description) {
    this.projectId = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.todoLists = [];
  }
}

function addTodo(project, ...todo) {
  project.todoLists.push(...todo);
}

function deleteTodo(project, ...todos) {
  //straightforward with filter and includes
  project.todoLists = project.todoLists.filter((todo) => !todos.includes(todo));
  return project.todoLists;
}
function getProjectId(project) {
  return project.projectId;
}

export { Project, getProjectId, addTodo, deleteTodo };
