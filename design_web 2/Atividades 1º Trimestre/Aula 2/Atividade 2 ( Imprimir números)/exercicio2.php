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
        echo "Exercício 2 : <br>";
        for ($i=2 ; $i<=28; $i+=2)
        {
            if($i>8 && $i<18 || $i>22 && $i<28){
                continue;
            }
            echo $i ."<br>";
        }
        echo "Com While: <br>";
        $c=2;
        while($c <=28){
           
            if($c>8 && $c<18 || $c>22 && $c<28){
                $c+=2;
                continue;
            }
            echo $c."<br>";
            $c+=2;
        } 
    ?>
</body>
</html>
