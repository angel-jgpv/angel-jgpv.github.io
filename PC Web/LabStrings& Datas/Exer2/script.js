function encontrarVogais(palavra){  
    let novaPalavra= "";
    for(const carac of palavra){ // for of serve para interar sobre um array ou uma string
        if("aeiouáàâãéêíóôõú".includes(carac.toLowerCase())){ // lê se da direita para esquerda 
            novaPalavra += ` <strong> ${carac} </strong>`;
        }
        else{
            novaPalavra+= carac;
        }
    }
    return novaPalavra;
}
document.getElementById("revelar").addEventListener("click", () =>{ // "()"  é uma função anonima 
    const input = document.getElementById("input");
    let arrayInput = input.value.split(" "); // .value pega toda a string do input
    arrayInput = arrayInput.map((palavra) => { //map faz uma alteraçao especifica em cada parte do array,sempre usando return // high order functions , uma função dentro da outra  
        return encontrarVogais (palavra); 
    })
    arrayInput = arrayInput.join(" "); 
    document.getElementById("revelarVogais").innerHTML="Vogais: " +arrayInput;
})