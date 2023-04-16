function codificar() {
    const frase = document.getElementById("frase").value;
    const fraseCodificada = document.getElementById("fraseCodificada");

    let novaFrase = "";

    for (let i = 0; i < frase.length; i++) {
        let letra = frase.charAt(i); // .charAt retorna o caractere em um índice especificado dentro de uma string. 

        switch (letra.toLowerCase()) {
            case 't':
                novaFrase += letra === 't' ? 'p' : 'P';// ? if e ":" else
                break;
            case 'e':
                novaFrase += letra === 'e' ? 'o' : 'O';
                break;
            case 'n':
                novaFrase += letra === 'n' ? 'l' : 'L';
                break;
            case 'i':
                novaFrase += letra === 'i' ? 'a' : 'A';
                break;
            case 's':
                novaFrase += letra === 's' ? 'r' : 'R';
                break;
            case 'p':
            case 'o':
            case 'l':
            case 'a':
            case 'r':
                novaFrase += letra === letra.toUpperCase() ? letra.toLowerCase() : letra.toUpperCase();
                break;
            default:
                novaFrase += letra;
                break;
        }
    }

    fraseCodificada.value = novaFrase;
}