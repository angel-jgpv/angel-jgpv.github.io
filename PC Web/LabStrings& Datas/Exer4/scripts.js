function calcularEstatisticas(){
    // obtendo o texto do textarea
    
    const texto = document.getElementById("texto").value;

    const palavras =  texto.split(" "); // quebrando o texto em palavras

    let ocorrencias = {};
    let maiorOcorrencia = "";
    let maiorQuantidade = 0;
    let totalPalavras = 0;
    let totalLetras = 0;

    // percorrendo cada palavra
    palavras.forEach(function (palavra) {
        totalPalavras++;

        // contando o número de letras na palavra
        totalLetras += palavra.length;

        // verificando se a palavra já foi contada antes
        if (ocorrencias[palavra]) {
            ocorrencias[palavra]++;
        }
        else {
            ocorrencias[palavra] = 1;
        }

        if (ocorrencias[palavra] > maiorQuantidade) {
            maiorOcorrencia = palavra;
            maiorQuantidade = ocorrencias[palavra];
        }
    });

    const resultado = document.getElementById("resultado");
    resultado.innerHTML= '<p>Palavra mais frequente: ' + maiorOcorrencia + '</p>' +
    '<p>Quantidade de ocorrências: ' + maiorQuantidade + '</p>' +
    '<p>Total de palavras: ' + totalPalavras + '</p>' +
    '<p>Total de letras: ' + totalLetras + '</p>';
}

