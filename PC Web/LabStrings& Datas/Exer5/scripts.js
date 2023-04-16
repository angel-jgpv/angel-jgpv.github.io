function substituir(){
    var textOriginal = document.getElementById("texto").value;
    var procurar = document.getElementById("procurar").value;   
    var substituir = document.getElementById("substituir").value;

    // o método replace() do JavaScript, substitui a primeira ocorrência de um valor 
    //por outro valor em uma string. Usando a expressão regular /g, substituímos todas as ocorrências.

    var resultado = textOriginal.replace(new RegExp (procurar, "g"), substituir);
   

    document.getElementById("resultado").value = resultado;
}

/* O método replace() é uma função embutida em JavaScript que é usada para substituir um padrão de texto por outro em uma string. 
    Sintaxe: string.replace(regexp|substr, newSubstr|function)
    Onde:

    string é a string original na qual você deseja fazer a substituição.
    regexp|substr é o padrão que você deseja procurar e substituir na string original. Isso pode ser uma expressão regular ou uma substring.
    newSubstr|function é o valor que será usado para substituir o padrão encontrado na string original. Isso pode ser uma string ou uma função que retorna uma string.

    Por exemplo, para substituir a primeira ocorrência de "mundo" por "planeta" em uma string, podemos usar o seguinte código:

    var str = "Olá mundo!";
    var novaStr = str.replace("mundo", "planeta"); // substituir "mundo" por(,) "planeta"
    console.log(novaStr); // "Olá planeta!"

    Para substituir todas as ocorrências de "mundo" por "planeta" em uma string, podemos usar uma expressão regular com a opção global (/g), como no exemplo abaixo:


    var str = "Olá mundo, mundo!";
    var novaStr = str.replace(/mundo/g, "planeta");
    console.log(novaStr); // "Olá planeta, planeta!"

    Também é possível usar uma função como segundo parâmetro do método replace(), que permite manipular o valor da substituição de forma mais complexa. 
    Por exemplo, podemos usar a função toUpperCase() para converter todas as letras maiúsculas em uma string em minúsculas:

    var str = "Ei, EU SOU UMA STRING!";
    var novaStr = str.replace(/[A-Z]/g, function(letra) {
    return letra.toLowerCase();
    });
    console.log(novaStr); // "ei, eu sou uma string!"

    Em resumo, o método replace() é muito útil em JavaScript para fazer substituições de texto em uma string de forma rápida e fácil, 
    e pode ser usado em uma ampla variedade de cenários.
*/