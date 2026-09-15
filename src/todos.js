//create Todos as a class
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    //   this.checklist = checklist;
    //   this.notes = notes;
    this.completed = false;
  }
}
function getPriority(priorityNum) {
  const priorities = {
    1: "High",
    2: "Normal",
    3: "Low",
  };

  return priorities[priorityNum];
}
function changePriority(todo, priorityNum) {
  let priority = Number(priorityNum);
  if (!Number(priority)) {
    alert("Enter a number: 1: High; 2: Normal; 3:Low");
  } else {
    todo.priority = priority;
  }
}

function editTodoDes(todo, description) {
  todo.description = description;
}

function editTodoDate(todo, date) {
  todo.dueDate = date;
}
function isCompleted(todo) {
  todo.completed = true;
}
function toggleCompleted(todo) {
  todo.completed = todo.completed ? false : true;
  //can be writen as todo.completed = !todo.completed; since its already a boolean value
}

export {
  Todo,
  editTodoDes,
  editTodoDate,
  changePriority,
  getPriority,
  isCompleted,
};
