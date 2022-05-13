


//var valorOutput = document.querySelector("#output-padrao");
//var valorInput = document.querySelector("#input-padrao");

function btnDescriptar(){
    
/*
    var textoDescriptado = descriptar(valorOutput.value);
    valorInput.value = textoDescriptado; 
*/
    var textoDescriptado = descriptar(inputPadrao.value);
    inputPadrao.value = textoDescriptado
    

    var quadrado = document.querySelector("#output-padrao");
    quadrado.style.display = "block";

    outputPadrao.value = inputPadrao.value;

    inputPadrao.value = "";
//antes da merda
 
}




function descriptar(stringDescriptada){
    var matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringDescriptada;
}







/*


Ligar a função ao botão correspondente no HTML


Capturar o texto escrito no campo de input do HTML
Desenvolver a lógica da descriptografia
retornar na tela o resultado do texto descriptografado
Adicionar um item

*/