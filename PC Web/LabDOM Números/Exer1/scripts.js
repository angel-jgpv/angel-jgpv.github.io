
function soma (){
    let n1 = parseFloat(document.getElementById("n1").value); 
    /*Quando recuperamos valores dos campos de entrada, 
    o JavaScript os trata como strings, mesmo que sejam números. Quando você usa o operador + em duas strings, ele as concatena em vez de somá-las.
    Para corrigir o problema, use a função parseInt() para converter as strings em números inteiros antes de somá-los, 
    ou parseFloat() para números de ponto flutuante, ou apenas "+" e/ou Number().
    */
    let n2 = parseFloat(document.getElementById("n2").value);
    /*Quando recuperamos valores dos campos de entrada, 
    o JavaScript os trata como strings, mesmo que sejam números. Quando você usa o operador + em duas strings, ele as concatena em vez de somá-las.
    Para corrigir o problema, use a função parseInt() para converter as strings em números inteiros antes de somá-los, 
    ou parseFloat() para números de ponto flutuante, ou apenas "+"  e/ou Number().
    */
    let resultado = n1 + n2; // calculando a soma dos dois NÚMEROS.
    document.getElementById("resultado").textContent= "A soma dos números resulta em : " + resultado; // textContent atualiza o texto do elemento h2
}


