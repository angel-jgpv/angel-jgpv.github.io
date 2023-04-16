  function exibirDataPorExtenso() {
  const dataNascimento = document.getElementById("dataNascimento").value;
  const [dia, mes, ano] = dataNascimento.split("/");

  // separa a string em cada ocorrencia de "/" , o resultado é um array de três elementos, 
  //com dia no 1 elemento, mes no segundo e ano no terceiro

   const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  // retorna o nome do mês por extenso correspondente ao número do mês fornecido pelo usuário.

  const mesPorExtenso = meses[parseInt(mes) - 1]; 

  /*Subtraindo 1 do número do mês, obtemos o índice correto na matriz de meses, 
  pois os índices de uma matriz em JavaScript começam em zero. Por exemplo, janeiro é o primeiro mês do ano e é representado pelo número 1, 
  mas seu índice na matriz de meses é 0.*/
  
 const dataPorExtenso = `${dia} de ${mesPorExtenso} de ${ano}`;
 document.getElementById("dataPorExtenso").innerHTML = dataPorExtenso; 
}
