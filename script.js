

function butao_magico() {
    const elemento = document.getElementById("pa1");
    elemento.innerHTML = "O js Funcionouu";
}
function alternarElemento() {
    const elemento = document.getElementById("elemento-secreto");
    elemento.classList.toggle("escondido");
}

const meuFormulario = document.getElementById("form1");
meuFormulario.addEventListener("submit", processarLogin);
function processarLogin(event){
    event.preventDefault();
    const campoNome = document.getElementById("campo-nome");
    const nomeDigitado = campoNome.value;
    const elementomensagem = document.getElementById("boas-vindas");
    elementomensagem.innerHTML = `Olá ${nomeDigitado}! Seja bem vindo!`;
    campoNome.value = "";


}