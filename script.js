



var imagem = document.querySelector("#render");
var inputPadrao = document.querySelector("#input-padrao");

var criptografar = document.querySelector(".criptografar");
var descriptografar = document.querySelector(".descriptografar");
var outputPadrao = document.querySelector("#output-padrao");

var mensagemEncontrada = document.querySelector("#mensagem-encontrada");
var mensagemDigiteTexto = document.querySelector("#mensagem-digite-texto");

var botaoCopiar = document.querySelector(".copiar");


var containerMensagens = document.querySelector("#mini-container-output");

//outputPadrao.classList.add("invisivel");
outputPadrao.classList.add("invisivel");
botaoCopiar.classList.add("invisivel");

criptografar.addEventListener("click", function () {
    //inputPadrao.value = "";

    if (inputPadrao.value !== "") {
        
        BtnEncriptar();
        outputPadrao.classList.remove("invisivel");
        botaoCopiar.classList.remove("invisivel");
        imagem.classList.add("invisivel");
        containerMensagens.classList.add("invisivel");
        

    }
    else {
        alert("preencha os campos");
    }

})







botaoCopiar.addEventListener("click", function () {
    
    btnCopiar();
    outputPadrao.classList.add("invisivel");
    botaoCopiar.classList.add("invisivel");

    imagem.classList.remove("invisivel");
    
    containerMensagens.classList.remove("invisivel");
 
})

function btnCopiar() {

    let copyText = document.querySelector("#output-padrao");
    copyText.select();
    document.execCommand("copy");
    console.log(copyText);

    inputPadrao.value = "";

    alert("Mensagem copiada ^^");


}



descriptografar.addEventListener("click", function () {


    if (inputPadrao.value !== "") {
        
        btnDescriptar();
        outputPadrao.classList.add("invisivel");
        imagem.classList.remove("invisivel");

        containerMensagens.classList.add("invisivel");

    }
    else {
        alert("Preencha os campos");
    }
    botaoCopiar.classList.remove("invisivel");
    alert("reinicie a página para tentar novamente");
})

