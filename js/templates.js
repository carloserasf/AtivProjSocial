const Templates = {
  home: () => `
    <section>
      <h1>Bem-vindo</h1>
      <p>Versão SPA simples.</p>
    </section>
  `,

  projetos: () => `
    <section>
      <h1>Projetos</h1>
      <p>Detalhes dos projetos.</p>
    </section>
  `,

  cadastro: () => `
    <section>
      <h1>Cadastro (SPA)</h1>
      <form id="form-spa">
        <label>Nome</label>
        <input id="nome" required />

        <label>Email</label>
        <input id="email" type="email" required />

        <button type="submit">Enviar</button>
      </form>
      <div id="msg"></div>
    </section>
  `
};