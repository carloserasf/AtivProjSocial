document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("spa-root");

  function navigation() {
    const page = window.location.hash.replace("#", "");

    if (!page || page === "home") {
      root.innerHTML = Templates.home();
    } else if (page === "projetos") {
      root.innerHTML = Templates.projetos();
    } else if (page === "cadastro") {
      root.innerHTML = Templates.cadastro();
      FormValidation.init();
    } else {
      root.innerHTML = "<h2>Página não encontrada</h2>";
    }
  }

  window.addEventListener("hashchange", navigation);
  navigation();
});