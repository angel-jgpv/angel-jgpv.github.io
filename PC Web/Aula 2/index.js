document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')//A primeira linha retorna o valor daquela chave dark-mode se existir navegador, caso contrário retorna nulo.
    const html = document.querySelector('html') //Quando todo o site for carregado, eu vou guardar a tag html.
    const inputDarkMode = document.getElementById('input-dark-mode') //Quando todo o site for carregado, eu vou guardar o input do modo dark.


    //Depois fazemos uma verificação se existe o darkModeStorage (significa dizer que ele encontrou um valor para a chave dark-mode). 
    if(darkModeStorage){//Se existir, é porque o usuário em algum momento no passado apertou no botão do modo dark. 
        html.setAttribute("dark", "true")//Então, podemos adicionado a propriedade dark no html.
    }

    //Depois, fico escutando o input. 
    inputDarkMode.addEventListener('change', () => { 
        
        //Quando o valor dele for alterado, ou seja, quando ele for marcado ou desmarcado, executa alguns blocos de instruções.
        if(inputDarkMode.checked){ //Se o input mudou o valor e ele está marcado, eu adicionado o atributo dark com o valor true no meu html. 
            html.setAttribute("dark", "true")
            localStorage.setItem('dark-mode', true)
        }else{//Se o input foi alterado e ele não está mais checado,//eu removo o atributo dark da minha tag html.
            html.removeAttribute("dark")
            localStorage.removeItem('dark-mode')
        }
   })
})