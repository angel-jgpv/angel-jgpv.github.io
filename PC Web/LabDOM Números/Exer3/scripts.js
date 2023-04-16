function checarPrimo() {
    const n1 = document.getElementById("n1").value;
    let primo = true;
    
    if (n1 <= 1) {
      primo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(n1); i++) { 
        if (n1 % i == 0) {
          primo = false;
          break;
        }
      }
    }
    /* Para verificar se um número é primo, é suficiente testar divisões apenas até a raiz quadrada desse número. 
    Se não houver nenhum divisor inteiro menor ou igual à raiz quadrada do número, então o número é primo.
    Por exemplo, para verificar se o número 37 é primo, só é necessário testar divisões por 2, 3, 4, 5 e 6. 
    Isso porque a raiz quadrada de 37 é aproximadamente 6.08, então não é necessário testar divisões por números maiores do que 6. */
    if (primo) {
      document.getElementById("verificacao").textContent = `${n1} é um número primo!`;
    } else {
      document.getElementById("verificacao").textContent = `${n1} não é um número primo.`;
    }
  }
  // apto à melhorias futuras