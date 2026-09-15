import { projectsArray } from "./app.js";
import { todosLoad } from "./todosLoad.js";
import { createNewTodoLoad, createNewProjectLoad } from "./createNewDomLoad.js";

function createCards(parent, array, nameOfClass) {
  //create the cards loop

  array.forEach((project) => {
    let card = document.createElement("div");

    let titleLabel = document.createElement("label");
    let descLabel = document.createElement("label");

    let titleGroup = document.createElement("div");
    let descGroup = document.createElement("div");
    titleGroup.setAttribute("class", "project-info");
    descGroup.setAttribute("class", "project-info");

    titleLabel.textContent = "Title";
    descLabel.textContent = "Description";

    card.setAttribute("class", nameOfClass);

    let paraName = document.createElement("p");
    let paraDesc = document.createElement("p");
    paraName.textContent = project.name;
    paraDesc.textContent = project.description;

    titleGroup.append(titleLabel, paraName);
    descGroup.append(descLabel, paraDesc);

    card.append(titleGroup, descGroup);

    card.addEventListener("click", () => {
      if (project.todoLists.length < 1) {
        alert(`There are no ToDo lists for: ${project.name}`);
      } else todosLoad(project);
    });

    // card.setAttribute("id", project.projectId);
    parent.appendChild(card);
  });
}

function domLoad() {
  const container = document.getElementById("content");

  const sidebar = document.createElement("div");
  const logo = document.createElement("div");
  const dashboard = document.createElement("div");
  const header = document.createElement("header");
  const linkList = document.createElement("ul");
  const listItem = document.createElement("li");
  const homeLink = document.createElement("a");
  const article = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const newProjectBtn = document.createElement("button");
  const newTodoBtn = document.createElement("button");

  newProjectBtn.textContent = "New Project";
  newTodoBtn.textContent = "New Todo";

  newProjectBtn.addEventListener("click", () => {
    createNewProjectLoad();
  });
  newTodoBtn.addEventListener("click", () => {
    createNewTodoLoad(projectsArray);
  });

  homeLink.textContent = "Home";
  homeLink.addEventListener("click", () => {
    domLoad();
  });

  logo.textContent = "TwoDoo";

  listItem.append(homeLink);
  linkList.appendChild(listItem);
  sidebar.append(logo, linkList);

  logo.setAttribute("class", "logo");
  sidebar.setAttribute("class", "sidebar");
  linkList.setAttribute("class", "nav");
  dashboard.setAttribute("class", "dashboard");
  header.setAttribute("class", "header");
  article.setAttribute("class", "article");
  buttonWrapper.setAttribute("class", "buttonWrapper");

  buttonWrapper.append(newProjectBtn, newTodoBtn);
  article.append(buttonWrapper);
  createCards(article, projectsArray, "card");

  container.replaceChildren(sidebar, dashboard, article);
  document.body.replaceChildren(header, container);
}

export { domLoad };
