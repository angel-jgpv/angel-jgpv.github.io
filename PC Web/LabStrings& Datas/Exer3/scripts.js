function contaPalavras(div){
    const input = document.getElementById("input");
    const palavra = input.value.split(" "); //ex:["lol" , "lol" , "lmao"] "return" lol lol lmao
    let arrayPalavras = [];
    palavra.forEach((palavras) => { // percorrendo o array e criando um outro array sem palavras repitidas
        if(!palavra.include(palavras)){
            palavra.push(palavra);
        }
    })
    palavra.forEach((palavras)=>{
        let cont = 0;
        for(const valor of palavra){
             if (palavra == valor){
                cont++;
            }
        }  
        div.innerHTML += `<tr><td> ${palavra}</td> 
        <td> ${cont} </td> </tr>`  
        })
        console.log(palavras);
    }
document.getElementById("expor").addEventListener("click" , () => {
    const div = document.getElementById("tabelaPalavras")
    div.innerHTML = `     
    <table border="1">
    <tr>
        <th>Palavras</th>
        <br>
        <th>Ocorrencias</th>
    </tr>
</table> ` // "`"serve para colocar código JS
contaPalavras(div)

})


// array.push () acrescenta algo no final do array 
// array.unshift () acrescenta algo no começo do array