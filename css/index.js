const btMudar = document.querySelector("#botao");


    function geraNumAle (){
        return Math.trunc(Math.random()*255);
    }
    function criaCor(){
        return `rgb(${geraNumAle()}, ${geraNumAle()}, ${geraNumAle()})`;
    }

    function mudaCorFundo(seletorHTML){
        const mudarCor = document.querySelector(seletorHTML);
        mudarCor.style.backgroundColor = criaCor()
    }

    btMudar.addEventListener("click", function (){
        mudaCorFundo("body");
    })