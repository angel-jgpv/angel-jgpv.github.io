function calcSalario () {
    let salario = parseFloat(document.getElementById("salario").value);
    let reajuste = parseFloat(document.getElementById("reajuste").value);

    reajuste = (reajuste/100);
    const percentual = salario*reajuste;
    salario = salario - percentual;

    document.getElementById("calculo").textContent=`O  novo salário é de ${salario.toFixed(2)} R$`;
}