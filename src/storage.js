function store(user) {
  localStorage.setItem("Projects", JSON.stringify(user));
}

function retrieve() {
  const user = JSON.parse(localStorage.getItem("Projects"));
  return user;
}

export { store, retrieve };
