<?php
    require_once "funcoes.php";
    if (isset($_POST ["peso"]) && isset($_POST["altura"])){ // isset: verificar se uma informação veio do formulário
        
        $peso = (float) $_POST ["peso"];
        $altura = (float) $_POST["altura"];
        
        $imc = calcularImc($peso,$altura);
        $grau = calcularGrau($imc);
        echo $grau;
    }
    else{
        die("Erro! Entrada de dados inválida.");
    }
?>










