<?php
    $dados = $_POST;
    $altura = (float) $dados["altura"];
    $peso = (float) $dados["peso"];
    
    function obterImc ( float $h , float $p): float{
        $imc=($p/(pow($h,2)));
        return $imc;
    }
    
    function preencherImc(float $imc , string &$cla):void{
        if($imc < 18.5)
            $cla="Abaixo do peso normal";
        elseif($imc <= 24.9) 
            $cla= "Peso normal";
        elseif($imc <= 29.9)
            $cla="Excesso de peso";
        elseif($imc <= 34.9 )
            $cla="Obesidade |";
        elseif($imc <= 39.9)
            $cla="Obesidade ||";
        else
            $cla="Obesidade |||";
    }
    $imc = (int) obterImc($altura , $peso);
    $cla = "";
    preencherImc ($imc,$cla);
    echo "$imc <br> $cla";
 ?>