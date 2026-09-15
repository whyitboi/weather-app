class User {
  constructor(user) {
    this.userId = 1; //create dynamic userIDs
    this.user = user;
    this.userProjectsArray = [];
  }
}
function addProjects(user, ...project) {
  user.userProjectsArray.push(...project);
}

export { User, addProjects };
