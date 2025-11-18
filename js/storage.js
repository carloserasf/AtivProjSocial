const Storage = {
  saveUser(user) {
    let data = JSON.parse(localStorage.getItem("usuarios")) || [];
    data.push(user);
    localStorage.setItem("usuarios", JSON.stringify(data));
  }
};
