<?php 
    function obterMedia (float $n1,float $n2):float{
        $media = ($n1+$n2) / 2;
        return $media;
    }

    function preencherGrau (float $med, string &$g):void{
        if($med>8)
            $g='A';
        elseif($med>=6)
            $g = 'B';
        elseif($med>=4)
            $g = 'C';
        elseif($med>=2)
            $g = 'D';
        else
            $g = 'E';
       }
?>