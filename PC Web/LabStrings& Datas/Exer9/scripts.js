function exibirDiasDeVida(){
    let dataNascimento = new Date(document.getElementById("dataNascimento").value);
    let dataAtual = new Date();
    let diferencaEmMilissegundos = dataAtual.getTime() - dataNascimento.getTime();
    let diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
	
    document.getElementById("diasDeVida").value = diferencaEmDias;
}
