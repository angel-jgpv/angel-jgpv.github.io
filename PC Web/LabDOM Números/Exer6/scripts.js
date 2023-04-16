function calcGrau() {
    let grauF = parseFloat(document.getElementById("grausF").value);
    let grau = ((grauF - 32) *5) /9;

    document.getElementById("calculo").textContent=`${grauF} graus Fahrenheit (F) é igual a  ${grau.toFixed(2)} graus (°) `;
}