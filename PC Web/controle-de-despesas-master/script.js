document.querySelector("form").addEventListener("submit" , (ev) => {
      ev.preventDefault();
      const valor = document.getElementById("amount").value;
      if(valor.includes("+")){
        adicionarDinheiro(+valor);
  }else if(valor.includes("-")){
      adicionarDespesa(+valor);     
  } 

})

function criaCardTransicao (){
    const valor = document.getElementById("amount").value;
    const nome = document.getElementById("text").value;
    const ul = document.getElementById("transactions");
    const li = document.createElement("li");
    li.innerHTML = `Nome: ${nome} <br> Valor: ${valor}`;
    ul.appendChild(li);
}

function adicionarDinheiro(valor){
    const receita = document.getElementById("money-plus");
    receita.textContent = +receita.textContent + valor;
    const balance = document.getElementById("balance");
    balance.textContent = +balance.textContent + valor;    
    criaCardTransicao()
}

function adicionarDespesa(valor){
    const despesas = document.getElementById("money-minus");
    despesas.textContent = +despesas.textContent + valor;
    const balance = document.getElementById("balance");
    balance.textContent = +balance.textContent - -(valor);
    criaCardTransicao();
}