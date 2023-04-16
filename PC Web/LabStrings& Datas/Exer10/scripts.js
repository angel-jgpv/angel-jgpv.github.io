function calcularSemanas() {
    // Obter os valores das datas a partir dos inputs
    let data1 = new Date(document.getElementById("data1").value);
    let data2 = new Date(document.getElementById("data2").value);

    // Calcular a diferença em milissegundos entre as duas datas
    let diff = Math.abs(data2.getTime() - data1.getTime());

    // Calcular a diferença em semanas e exibir o resultado
    let diffSemana = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    document.getElementById("resultado").innerHTML = diffSemana + " semanas";
}