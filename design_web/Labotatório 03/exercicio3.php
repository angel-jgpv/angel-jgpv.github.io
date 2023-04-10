<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada</title>
</head>
<body>
    <?php
    echo "Exercício 3 : <br>";
    for($d=2; $d<=28; $d+=2){
        if($d>8 && $d<16){
            continue;
        }
        if ($d==20){
        break;
        }
        echo $d ."<br>";
    }
    echo "Com while:<br> ";

    $e=0;
    while($e<28){
        $e+=2;
        if ($e>8 && $e<16){
            continue;
        }
        if($e==20){
            break;
        }
        echo $e."<br>";
    }
    ?>
</body>
</html>