const xhttp = new XMLHttpRequest()
const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json";
const carregaLista = lista => {
    return lista.reduce((acum,item)=>{
        return acum + `<li>${item}</li>`
    },"")

}
const carregarReceita = receita =>{
    let resp = `<div class="receita">
    <h1> ${receita.nome}</h1>
    <img src="${receita.foto}" alt="${receita.nome}">
    <h3>Preparo</h3>
    <ol>${carregaLista()} // incompleto
    </ol>
    </div> `
    const divResp = document.querySelector("#receitas")
    divResp.innerHTML += resp
}
xhttp.open("GET", url);
xhttp.send()
xhttp.onreadystatechange = function() {
    if (this.readyState == 4){
        if (this.status == 200){
            // baixar receitas

            let respostas = this.responseText;
            let receitas = JSON.parse(respostas); // 
            receitas.forEach(preparacao=> {
                carregarReceita(preparacao)
            });


            // iterar o array e carregar receitas
        } else{
            // deu bigode
        }
    }
}