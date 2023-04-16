 /*function maiorQ (){
    // Captura os valores dos campos do formulário
    let n1 = parseFloat(document.getElementById("n1").value); 
    let n2 = parseFloat(document.getElementById("n2").value);
    // Compara os valores e exibe o resultado
    if (n1 > n2){
        document.getElementById("comparacao").innerHTML= "O primeiro número é maior.";
    }
    else if (n2 > n1){
        document.getElementById("comparacao").innerHTML= "O segundo número é maior.";
    }
    else {
        
        document.getElementById("comparacao").innerHTML= "Os números são iguais.";
    }
 }
 */ 
 //funciona, porém, watch this:
 function validarEntrada(n1, n2) {
    if (!(n1 && n2) || isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos em ambos os campos.");
        return false;
    }
    return true;
}

function compararNumeros(n1, n2) {
    if (n1 > n2) {
        return "O primeiro número é maior.";
    } else if (n2 > n1) {
        return "O segundo número é maior.";
    } else {
        return "Os números são iguais.";
    }
}

function maiorQ() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    /*
    Nesse caso, a funçao esta  recebendo os valores de n1 e n2 a partir dos elementos de input do formulário 
    e passando esses valores como argumentos para a função MaiorQ. Dentro dessa função, você está verificando se os valores são válidos
    com a funçao validar/entrada e, em seguida, chamando a função compararNumeros com esses valores como argumentos.
    Nesse  exemplo, a função maiorQ chama outras funções e recebe as variáveis n1 e n2 como argumentos, 
    que são validados por meio da função validarEntrada antes de serem comparados pela função compararNumeros. 
    Dessa forma, o resultado da comparação é exibido na página HTML por meio da alteração do conteúdo da tag h2 com id comparacao.
    e você está passando as variáveis como argumentos em vez de defini-las em um escopo mais amplo.
    */
  
    if (validarEntrada(n1, n2)) {
        let resultado = compararNumeros(n1, n2);
        document.getElementById("comparacao").innerHTML = resultado;
    } else {
        alert("Por favor, insira números válidos em ambos os campos.");
    }
}