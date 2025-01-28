const btn_avancar = document.getElementById("btn-avancar");
const btn_voltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cardAtual = 0;





btn_avancar.addEventListener("click", function () {

    if (cardAtual === cartoes.length - 1) {
        return;
    }
    EsconderCartaoSelecionado();

    cardAtual++;
    MostrarCartao(cardAtual);

});

btn_voltar.addEventListener("click", function () {
    if (cardAtual === 0) {
        return;
    }
    console.log(cardAtual)
    console.log(cardAtual === cartoes.length - 1)

    EsconderCartaoSelecionado();

    cardAtual--
    MostrarCartao(cardAtual);
});

function MostrarCartao() {
    cartoes[cardAtual].classList.add("selecionado");
}

function EsconderCartaoSelecionado() {
    const CartaoSelecionado = document.querySelector(".selecionado");
    CartaoSelecionado.classList.remove("selecionado");
}
