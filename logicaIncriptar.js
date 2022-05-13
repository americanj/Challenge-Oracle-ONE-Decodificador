

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



var valorInput = document.querySelector("#input-padrao");
var valorOutput = document.querySelector("#output-padrao");



function BtnEncriptar() {
    var textoEncriptado = encriptar(valorInput.value)
    valorOutput.value = textoEncriptado
}

function encriptar(stringCriptada){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptada = stringCriptada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++){
        if(stringCriptada.includes(matrizCodigo[i][0])){
            stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringCriptada;
}






/*
function logicaEncriptar(valorInput) {
    var chavesCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    valorInput = valorInput.toLowerCase();

    for (var i = 0; i < chavesCriptografia.length; i++) {
        if (valorInput.includes(chavesCriptografia[i][0])) {
            valorInput = valorInput.replaceAll(chavesCriptografia[i][0], chavesCriptografia[i][1])
            //console.log(stringCriptada);
        }
    }
    //console.log(stringCriptada)
    return valorInput;
}

*/

/*
Boas vindas ao primeiro desafio!

Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.



*/ 