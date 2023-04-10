<?php
    include_once ("funcoes.php");
    if(isset($_POST["nome"]) && isset($_POST["nota1"]) && isset($_POST["nota2"])) {

        $nome = $_POST["nome"];
        $nota1 = floatval($_POST["nota1"]);
        $nota2 = floatval($_POST["nota2"]);
        $grau = "";

        $media = obterMedia($nota1 , $nota2);
        preencherGrau($media,$grau);

        echo "<h3> RESULTADO: </h3> <br><hr>";
        echo "Nome: $nome<br>";
        echo "Média: {$media}<br>";
        echo "Grau: $grau<br><hr>";
     }
?>