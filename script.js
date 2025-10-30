const historicoUsuarios = [];

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
    const nomeLimpo = nomeDigitado.trim();
    if (nomeLimpo === "") {
        campoNome.classList.add("input-erro");
        alert("Por favor, insira um nome válido.");
        return;
    }
    campoNome.classList.remove("input-erro");
    const indicator = document.getElementById("loading-indicator");
    indicator.classList.remove("escondido");
    const botaoForm = meuFormulario.querySelector("button[type='submit']");
    botaoForm.disabled = true;
    botaoForm.textContent = "Carregando...";
    botaoForm.style.cursor = "not-allowed";    
    setTimeout(() => {    
        const novoUsuario = { nome: nomeDigitado, dataEntrada: new Date() };
        historicoUsuarios.push(novoUsuario);
        atualizarlista();
        campoNome.value = "";
        indicator.classList.add("escondido");
        botaoForm.disabled = false;
        botaoForm.textContent = "Entrar";
        botaoForm.style.cursor = "pointer";
    }, 2000);

}
function atualizarlista(){
    const listaNomes = document.getElementById("lista-historico");
    
    listaNomes.innerHTML = "";
    for (const usuario of historicoUsuarios){
        const itemLista = document.createElement("li");
        itemLista.textContent = `${usuario.nome} logou em ${usuario.dataEntrada.toLocaleString()}`;
        listaNomes.appendChild(itemLista);
    }
}