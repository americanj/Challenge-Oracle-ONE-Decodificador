



var imagem = document.querySelector("#render");
var inputPadrao = document.querySelector("#input-padrao");

var criptografar = document.querySelector(".criptografar");
var descriptografar = document.querySelector(".descriptografar");
var outputPadrao = document.querySelector("#output-padrao");

var mensagemEncontrada = document.querySelector("#mensagem-encontrada");
var mensagemDigiteTexto = document.querySelector("#mensagem-digite-texto");

var botaoCopiar = document.querySelector(".copiar");

outputPadrao.classList.add("esconde");
botaoCopiar.classList.add("esconde");

//criptografar.style.display = "none"

criptografar.addEventListener("click", function () {
    //inputPadrao.value = "";

    if (inputPadrao.value !== "") {
        
        BtnEncriptar();
        imagem.classList.add("esconde");
        mensagemEncontrada.classList.add("esconde");
        mensagemDigiteTexto.classList.add("esconde");

        outputPadrao.classList.add("mostra");
        botaoCopiar.classList.add("mostra");

    }
    else {
        alert("preencha os campos");
    }

})





descriptografar.addEventListener("click", function () {


    if (inputPadrao.value !== "") {
        
        btnDescriptar();
        outputPadrao.style.display = "inline-block";
        imagem.style.display = "none";
        mensagemEncontrada.style.display = "none"
        mensagemDigiteTexto.style.display = "none";

    }
    else {
        alert("Preencha os campos");
    }
    botaoCopiar.style.display = "block";
})



botaoCopiar.addEventListener("click", function () {
    

    btnCopiar();
    outputPadrao.style.display = "none";
    botaoCopiar.style.display = "none";

    imagem.style.display = "block";
    mensagemEncontrada.style.display = "block";
    mensagemDigiteTexto.style.display = "block";
})

function btnCopiar() {

    let copyText = document.querySelector("#output-padrao");
    copyText.select();
    document.execCommand("copy");
    console.log(copyText);

    inputPadrao.value = "";

    alert("Mensagem copiada ^^");


}

