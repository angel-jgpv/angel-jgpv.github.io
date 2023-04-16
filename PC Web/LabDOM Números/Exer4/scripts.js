   function calcHipo () {
        const n1 = parseFloat(document.getElementById("n1").value);
        const n2 = parseFloat(document.getElementById("n2").value);

        const hipotenusa = Math.sqrt(n1**2 + n2**2);

        document.getElementById("calculo").textContent=`A hipotenusa é ${hipotenusa.toFixed(2)}`;
}
  


 