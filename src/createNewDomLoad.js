import { format } from "date-fns";
import { Todo } from "./todos.js";
import { Project } from "./projects.js";
import { addTodoToProject, addNewUserProject } from "./app.js";
import { domLoad } from "./domLoad.js";

function createNewTodoLoad(projectsArray) {
  const article = document.querySelector(".article");
  const dialog = document.createElement("dialog");
  const todoForm = document.createElement("form");
  const inputRowOneDiv = document.createElement("div");
  const inputRowTwoDiv = document.createElement("div");
  const buttonRow = document.createElement("div");
  const titleLabel = document.createElement("label");
  const projectLabel = document.createElement("label");
  const dateLabel = document.createElement("label");
  const descLabel = document.createElement("label");
  const priorityLabel = document.createElement("label");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  let title = document.createElement("input");
  let dueDate = document.createElement("input");
  let desc = document.createElement("textarea");
  let priority = document.createElement("input");
  let projectSelect = document.createElement("select");

  const defOption = document.createElement("option");
  defOption.textContent = "Select a Project";
  defOption.disabled = true;
  defOption.selected = true;

  projectSelect.appendChild(defOption);

  projectsArray.forEach((project) => {
    const option = document.createElement("option");

    option.textContent = project.name;
    option.value = project.projectId;

    projectSelect.appendChild(option);
  });

  titleLabel.textContent = "Title";
  projectLabel.textContent = "Project";
  dateLabel.textContent = "Due Date";
  priorityLabel.textContent = "Priority";
  descLabel.textContent = "Description";

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
    required: true,
  });

  Object.assign(cancelBtn, {
    type: "button",
    className: "submit",
    value: "cancel",
  });

  Object.assign(saveBtn, {
    type: "button",
    className: "submit",
    value: "save",
  });

  Object.assign(todoForm, {
    className: "new-todo",
    action: "#",
    method: "dialog",
  });

  Object.assign(desc, {
    id: "newTodoTextarea",
    className: "formTextArea",
    required: true,
  });
  title.required = true;
  desc.required = true;
  dueDate.required = true;
  projectSelect.required = true;

  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Save";

  inputRowOneDiv.append(
    titleLabel,
    title,
    projectLabel,
    projectSelect,
    priorityLabel,
    priority,
  );
  inputRowTwoDiv.append(dateLabel, dueDate, descLabel, desc);
  buttonRow.append(cancelBtn, saveBtn);
  todoForm.append(inputRowOneDiv, inputRowTwoDiv, buttonRow);
  dialog.appendChild(todoForm);
  article.appendChild(dialog);

  dialog.showModal();

  const buttons = dialog.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "save") {
        if (title.value && desc.value && dueDate.value && projectSelect.value) {
          if (priority.value < 1 || priority.value > 3) {
            alert("Select 1 for high, 2 for normal or 3 for low in Priority");
            return;
          }
        } else {
          alert("Please complete all required fields");
          return;
        }
      }

      dialog.close(button.value);
    });
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "save") {
      const selectedProject = projectsArray.find(
        (project) => project.projectId === projectSelect.value,
      );

      const todo = new Todo(
        title.value,
        desc.value,
        dueDate.value,
        priority.value,
      );
      addTodoToProject(selectedProject, todo);
      dialog.remove();
      domLoad();
    } else {
      dialog.remove();
    }
  });
}

function createNewProjectLoad() {
  const article = document.querySelector(".article");
  const dialog = document.createElement("dialog");
  const todoForm = document.createElement("form");
  const inputRowOneDiv = document.createElement("div");
  const inputRowTwoDiv = document.createElement("div");
  const buttonRow = document.createElement("div");
  const titleLabel = document.createElement("label");
  const descLabel = document.createElement("label");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  let desc = document.createElement("textarea");
  let title = document.createElement("input");

  titleLabel.textContent = "Project Name";
  descLabel.textContent = "Description";

  inputRowOneDiv.setAttribute("class", "form-row");
  inputRowTwoDiv.setAttribute("class", "form-row");
  dialog.setAttribute("id", "todoDialog");
  descLabel.setAttribute("for", "description");
  desc.setAttribute("id", "description");

  Object.assign(buttonRow, {
    id: "button-row",
  });

  Object.assign(cancelBtn, {
    type: "button",
    className: "submit",
    value: "cancel",
  });

  Object.assign(saveBtn, {
    type: "button",
    className: "submit",
    value: "save",
  });

  Object.assign(todoForm, {
    className: "new-project",
    action: "#",
    method: "dialog",
  });

  Object.assign(desc, {
    id: "newProjectTextarea",
    className: "formTextArea",
  });
  title.required = true;
  desc.required = true;

  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Save";

  inputRowOneDiv.append(titleLabel, title);
  inputRowTwoDiv.append(descLabel, desc);
  buttonRow.append(cancelBtn, saveBtn);
  todoForm.append(inputRowOneDiv, inputRowTwoDiv, buttonRow);
  dialog.appendChild(todoForm);
  article.appendChild(dialog);

  dialog.showModal();

  const buttons = dialog.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "save") {
        if (title.value && desc.value) {
        } else {
          alert("Please enter all required values");
          return;
        }
      }
      dialog.close(button.value);
    });
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "save") {
      const newProject = new Project(title.value, desc.value);
      addNewUserProject(newProject);
      dialog.remove();
      domLoad();
    } else {
      dialog.remove();
    }
  });
}

export { createNewTodoLoad, createNewProjectLoad };
