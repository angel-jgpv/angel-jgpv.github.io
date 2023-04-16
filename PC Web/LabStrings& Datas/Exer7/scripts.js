function verificarSenha() {
	let senha = document.getElementById("senha").value;
	let feedback = document.getElementById("feedback");

	if (senha.match(/^[a-z]+$/) || senha.match(/^[A-Z]+$/)) {
		feedback.innerHTML = "Senha fraca";
		feedback.style.backgroundColor = "red";
	} else if (senha.match(/^[a-zA-Z0-9]+$/)) {
		feedback.innerHTML = "Senha moderada";
		feedback.style.backgroundColor = "orange";
	} else if (senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#!$%&*()\-+.=])[a-zA-Z0-9@#!$%&*()\-+.=]{8,}$/)) {
		feedback.innerHTML = "Senha forte";
		feedback.style.backgroundColor = "green";
	} else {
		feedback.innerHTML = "";
		feedback.style.backgroundColor = "";
	}
}