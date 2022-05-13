








var imagem = document.querySelector("#render");
var textarea = document.querySelector("#input-padrao");

var criptografar = document.querySelector(".criptografar");
var outputPadrao = document.querySelector("#output-padrao");

var mensagemEncontrada = document.querySelector("#mensagem-encontrada");
var mensagemDigiteTexto = document.querySelector("#mensagem-digite-texto");

var botaoCopiar = document.querySelector(".copiar");

outputPadrao.classList.add("esconde");
botaoCopiar.classList.add("esconde");

criptografar.addEventListener("click", function () {

    imagem.classList.add("esconde");
    mensagemEncontrada.classList.add("esconde");
    mensagemDigiteTexto.classList.add("esconde");
    
    outputPadrao.classList.add("mostra");
    botaoCopiar.classList.add("mostra");

    BtnEncriptar();

})

