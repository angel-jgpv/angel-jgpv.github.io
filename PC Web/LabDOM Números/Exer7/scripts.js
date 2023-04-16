function calcNota (){
    let nota1 = parseFloat(document.getElementById("n1").value);
    let nota2 = parseFloat(document.getElementById("n2").value);
    let nota3 = parseFloat(document.getElementById("n3").value);

   let mediaFinal = ((nota1*2) + (nota2*3) + (nota3*5))/10;

    document.getElementById("calculo").textContent=`A média final, considerando as notas ${nota1} , ${nota2} , ${nota3},  é  ${mediaFinal.toFixed(1)}  `;
}
