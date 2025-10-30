const historicoNomes = [];

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
    historicoNomes.push(nomeDigitado);
    atualizarlista();
    campoNome.value = "";
}
function atualizarlista(){
    const listaNomes = document.getElementById("lista-historico");
    
    listaNomes.innerHTML = "";
    for (const nome of historicoNomes){
        const itemLista = document.createElement("li");
        itemLista.textContent = nome;
        listaNomes.appendChild(itemLista);
    }
}