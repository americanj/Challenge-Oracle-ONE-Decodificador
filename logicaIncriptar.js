

/*

/*

var inputTexto = document.querySelector(".input-texto");
var mensagem = document.querySelector(".mensagem");





function BotaoEncriptar(){
    var textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

function encriptar(stringCriptada){
    var matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringCriptada = stringCriptada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++){
        if(stringCriptada.includes(matrizCodigo[i][0])){
            stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    
    return stringCriptada;
}

*/



//var valorInput = document.querySelector("#input-padrao");
//var valorOutput = document.querySelector("#output-padrao");



function BtnEncriptar() {
    /*
        var textoEncriptado = encriptar(valorInput.value)
        valorOutput.value = textoEncriptado
    */
    var textoEncriptado = encriptar(inputPadrao.value)
    outputPadrao.value = textoEncriptado
    inputPadrao.value = "";

  



}

function encriptar(stringCriptada) {
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptada = stringCriptada.toLowerCase();

    for (var i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptada.includes(matrizCodigo[i][0])) {
            stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringCriptada;
}

