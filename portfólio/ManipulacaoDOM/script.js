let alterado = false;

function alterarTexto() {
    const mensagem = document.getElementById("mensagem");
    if (!alterado) {
        mensagem.innerText = "Texto alterado com sucesso através da manipulação do DOM!";
        mensagem.style.color = "green";
        alterado = true;
    } else {
        mensagem.innerText = "Este texto será alterado por JavaScript.";
        mensagem.style.color = "black";
        alterado = false;
    }
}
