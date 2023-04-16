function inverter(palavra) {
    palavra = palavra.split(""); // .split transforma string em um array
    //palavra = palavra.reverse(""); // inverter as posiçoes do vetor ex: (0 --> ultima posiçao do vetor && 0 <-- ultima posiçao do vetor)

    // "na mao"

    for(let i=0 , k= palavra.length -1; i!= k; i++ , k--){
        let aux = palavra[i];
        palavra [i] = palavra [k];
        palavra [k] = aux;
    }
        return palavra.join("") ; // .join transforma um array em uma string
    }
        document.getElementById("invert").addEventListener("click", () =>{ // "()"  é uma função anonima 
            const input = document.getElementById("input");
            let arrayInput = input.value.split(" "); // .value pega toda a string do input
            arrayInput = arrayInput.map((palavra) => { //map faz uma alteraçao especifica em cada parte do array,sempre usando return // high order functions , uma função dentro da outra  
                return inverter(palavra); 
            })
            arrayInput = arrayInput.join(" "); 
            document.getElementById("invertida").textContent="Palavra(s) invertida: " +arrayInput;
        })

