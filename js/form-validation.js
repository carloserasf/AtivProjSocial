const FormValidation = {
  init() {
    const form = document.getElementById("form-spa");
    const msg = document.getElementById("msg");

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();

      if (nome.length < 3) {
        msg.textContent = "O nome precisa ter pelo menos 3 letras.";
        msg.style.color = "red";
        return;
      }

      if (!email.includes("@")) {
        msg.textContent = "Email inválido.";
        msg.style.color = "red";
        return;
      }

      Storage.saveUser({ nome, email });

      msg.textContent = "Cadastro realizado com sucesso!";
      msg.style.color = "green";

      form.reset();
    });
  }
};
