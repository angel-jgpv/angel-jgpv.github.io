const btn = document.querySelector("#executar")

    btn.addEventListener("click", () => {
        //criar um objeto xmlHttpRequest

        const xHttp = new XMLHttpRequest ()
        const endereco = document.querySelector("#endereco");
        const iptCep = document.querySelector("#cep");

        // configurar o objeto

        let url = `https://api.postmon.com.br/v1/cep/${iptCep.value}`;

        xHttp.open("GET", url);


        // enviar a requisiçao

        xHttp.send()

        // acompanhar a mudança de estado

        xHttp.onreadystatechange = function () {
            if (this.readyState == 4 &&  this.status == 200) {
                // o obejto xhttp mudou o estado para "tenho uma resposta (4) e deu tudo certo (200)"
                endereco.innerHTML = this.responseText;
            }
        }   
    })