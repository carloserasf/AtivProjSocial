// Máscara CPF
document.getElementById("cpf").addEventListener("input", function() {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.value = v;
});

// Máscara telefone
document.getElementById("telefone").addEventListener("input", function() {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = v;
});

// Máscara CEP
document.getElementById("cep").addEventListener("input", function() {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = v;
});