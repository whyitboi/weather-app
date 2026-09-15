import { format } from "date-fns";
import { domLoad } from "./domLoad.js";
import {
  editTodoToProject,
  deleteTodoFromProject,
  isCompletedTodo,
  getTodoPriority,
} from "./app.js";

function checkCompletedTodos(todoArr) {
  if (todoArr.length > 0) {
    if (todoArr.every((todo) => todo.completed)) {
      return true;
    }
  }
}

function todosLoad(project) {
  //this function loads just title and dueDate

  const article = document.querySelector(".article");
  const todoCardWrapper = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const backToProjects = document.createElement("button");
  todoCardWrapper.setAttribute("class", "cardWrapper");
  buttonWrapper.setAttribute("class", "buttonWrapper");

  backToProjects.textContent = "Back to Projects";
  backToProjects.addEventListener("click", () => {
    domLoad();
  });

  buttonWrapper.appendChild(backToProjects);

  todoCardWrapper.appendChild(buttonWrapper);

  if (checkCompletedTodos(project.todoLists)) {
    alert("All todos in this project have been completed");
    domLoad();
  } else {
    project.todoLists.forEach((todo) => {
      if (!todo.completed) {
        const todoCard = document.createElement("div");

        const titleGroup = document.createElement("div");
        const deuDateGroup = document.createElement("div");

        const paraTitle = document.createElement("p");
        const paradueDate = document.createElement("p");
        const detailsBtn = document.createElement("button");
        const titleLabel = document.createElement("label");
        const dueDateLabel = document.createElement("label");

        titleLabel.textContent = "Title";
        dueDateLabel.textContent = "Due date";
        detailsBtn.textContent = "See Details";

        todoCard.setAttribute("class", "card");
        titleGroup.setAttribute("class", "todo-info");
        deuDateGroup.setAttribute("class", "todo-info");

        //set the id of the card according to priority
        if (getTodoPriority(todo) === "High") {
          todoCard.setAttribute("id", "high-priority");
        } else if (getTodoPriority(todo) === "Normal") {
          todoCard.setAttribute("id", "normal-priority");
        } else if (getTodoPriority(todo) === "Low") {
          todoCard.setAttribute("id", "low-priority");
        }

        paraTitle.textContent = todo.title;
        paradueDate.textContent = todo.dueDate;

        detailsBtn.addEventListener("click", () => {
          todoDetails(todo, project);
        });

        titleGroup.append(titleLabel, paraTitle);
        deuDateGroup.append(dueDateLabel, paradueDate);

        todoCard.append(titleGroup, deuDateGroup, detailsBtn);

        todoCardWrapper.append(todoCard);
      }
    });
  }

  article.replaceChildren(todoCardWrapper);
}
function todoDetails(todo, project) {
  //this function will show the details and edit button

  const article = document.querySelector(".article");
  const todoCardWrapper = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const backToTodos = document.createElement("button");

  buttonWrapper.setAttribute("class", "buttonWrapper");
  todoCardWrapper.setAttribute("class", "cardWrapper");

  backToTodos.textContent = "Back to Todo";
  backToTodos.addEventListener("click", () => {
    todosLoad(project);
  });

  buttonWrapper.append(backToTodos);

  todoCardWrapper.appendChild(buttonWrapper);

  if (checkCompletedTodos(project.todoLists)) {
    alert("All todos in this project have been completed");
    domLoad();
  } else {
    if (!todo.completed) {
      const todoCard = document.createElement("div");
      const todoButtonWrapper = document.createElement("div");

      const paraTitle = document.createElement("p");
      const paraDesc = document.createElement("p");
      const paradueDate = document.createElement("p");
      const paraPriority = document.createElement("p");
      const markComplete = document.createElement("input");
      const deleteBtn = document.createElement("button");
      const editBtn = document.createElement("button");

      const titleLabel = document.createElement("label");
      const descLabel = document.createElement("label");
      const dueDateLabel = document.createElement("label");
      const priorityLabel = document.createElement("label");
      const completedLabel = document.createElement("label");

      const titleGroup = document.createElement("div");
      const descGroup = document.createElement("div");
      const dueDateGroup = document.createElement("div");
      const priorityGroup = document.createElement("div");
      const completeGroup = document.createElement("div");

      titleGroup.setAttribute("class", "todo-info");
      descGroup.setAttribute("class", "todo-info");
      dueDateGroup.setAttribute("class", "todo-info");
      priorityGroup.setAttribute("class", "todo-info");

      titleLabel.textContent = "Title";
      descLabel.textContent = "Description";
      dueDateLabel.textContent = "Due date";
      priorityLabel.textContent = "Priority";
      completedLabel.textContent = "Mark Complete";
      editBtn.textContent = "Edit Todo";
      deleteBtn.textContent = "Delete Todo";

      markComplete.type = "checkbox";
      todoCard.setAttribute("class", "card-details");
      todoButtonWrapper.setAttribute("class", "buttonWrapper");

      paraTitle.textContent = todo.title;
      paraDesc.textContent = todo.description;
      paraPriority.textContent = getTodoPriority(todo);

      //set the id of the card by priority
      if (getTodoPriority(todo) === "High") {
        todoCard.setAttribute("id", "high-priority");
      } else if (getTodoPriority(todo) === "Normal") {
        todoCard.setAttribute("id", "normal-priority");
      } else if (getTodoPriority(todo) === "Low") {
        todoCard.setAttribute("id", "low-priority");
      }

      paradueDate.textContent = todo.dueDate;

      markComplete.addEventListener("change", () => {
        if (markComplete.checked) {
          isCompletedTodo(todo);
          alert(`${todo.title}: has been marked as Complete`);
          if (checkCompletedTodos(project.todoLists)) {
            alert("All todos in this project have been completed");
            domLoad();
          } else {
            todosLoad(project);
          }
        }
      });

      editBtn.addEventListener("click", () => {
        todoEditLoad(todo, project);
      });
      deleteBtn.addEventListener("click", () => {
        deleteTodoFromProject(project, todo);
        if (project.todoLists.length > 0) todosLoad(project);
        else {
          alert("All todos have been deleted or completed");
          domLoad();
        }
      });
      titleGroup.append(titleLabel, paraTitle);
      descGroup.append(descLabel, paraDesc);
      dueDateGroup.append(dueDateLabel, paradueDate);
      priorityGroup.append(priorityLabel, paraPriority);
      completeGroup.append(completedLabel, markComplete);
      todoButtonWrapper.append(editBtn, deleteBtn);

      todoCard.append(
        titleGroup,
        descGroup,
        dueDateGroup,
        priorityGroup,
        completeGroup,
      );
      todoCard.appendChild(todoButtonWrapper);

      todoCardWrapper.append(todoCard);
    }
  }

  article.replaceChildren(todoCardWrapper);
}

function todoEditLoad(todo, project) {
  const article = document.querySelector(".article");
  const dialog = document.createElement("dialog");
  const todoForm = document.createElement("form");
  const inputRowOneDiv = document.createElement("div");
  const inputRowTwoDiv = document.createElement("div");
  const buttonRow = document.createElement("div");
  const title = document.createElement("legend");
  const titleLabel = document.createElement("label");
  const dateLabel = document.createElement("label");
  const descLabel = document.createElement("label");
  const priorityLabel = document.createElement("label");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  let dueDate = document.createElement("input");
  let desc = document.createElement("textarea");
  let priority = document.createElement("input");

  titleLabel.textContent = "Title";
  dateLabel.textContent = "Due Date";
  descLabel.textContent = "Description";
  priorityLabel.textContent = "Priority";

  inputRowOneDiv.setAttribute("class", "form-row");
  inputRowTwoDiv.setAttribute("class", "form-row");
  dialog.setAttribute("id", "todoDialog");
  descLabel.setAttribute("for", "description");
  desc.setAttribute("id", "description");

  Object.assign(buttonRow, {
    id: "button-row",
  });
  Object.assign(priority, {
    type: "number",
    min: 1,
    max: 3,
  });
  Object.assign(dueDate, {
    type: "date",
    min: format(new Date(), "yyyy-MM-dd"),
    value: todo.dueDate,
  });

  Object.assign(cancelBtn, {
    type: "button",
    class: "submit",
    value: "cancel",
  });

  Object.assign(saveBtn, {
    type: "button",
    className: "submit",
    value: "save",
  });

  Object.assign(todoForm, {
    className: "edit-todo",
    action: "#",
    method: "dialog",
  });

  Object.assign(desc.style, {
    width: "200px",
    height: "150px",
    resize: "none",
  });

  title.textContent = todo.title;
  priority.value = todo.priority;

  desc.textContent = todo.description;
  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Save";

  inputRowOneDiv.append(titleLabel, title, dateLabel, dueDate);
  inputRowTwoDiv.append(priorityLabel, priority, descLabel, desc);

  buttonRow.append(cancelBtn, saveBtn);
  todoForm.append(inputRowOneDiv, inputRowTwoDiv, buttonRow);
  dialog.appendChild(todoForm);
  article.appendChild(dialog);

  dialog.showModal();

  const buttons = dialog.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "save") {
        if (priority.value < 1 || priority.value > 3) {
          alert("Select 1 for high, 2 for normal or 3 for low in Priority");
          return;
        }
      }
      dialog.close(button.value);
    });
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "save") {
      editTodoToProject(todo, desc.value, dueDate.value, priority.value);
      dialog.remove();
      todosLoad(project);
    } else {
      dialog.remove();
    }
  });
}

export { todosLoad };
