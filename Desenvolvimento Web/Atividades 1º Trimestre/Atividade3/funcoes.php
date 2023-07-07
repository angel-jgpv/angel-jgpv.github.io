<?php
    function calcularImc (float $peso , float $altura):float{
        return $peso/(pow($altura,2));
    }
    function calcularGrau (float $imc):string{
        $grau="";
        if($imc <18)
            return $grau ="baixo peso";
        elseif($imc <= 24.9)
            return $grau ="peso adequado";
        elseif($imc <=29.9)
            return $grau ="sobrepeso";
        elseif($imc <=34.9)
            return $grau ="obesidade grau 1";
        elseif($imc <=39.9)
            return $grau ="obesidade grau 2";
        else 
            return $grau ="obesidade extrema";
    }
?>