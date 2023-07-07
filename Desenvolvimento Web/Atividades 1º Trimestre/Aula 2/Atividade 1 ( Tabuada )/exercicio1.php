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
    echo "Exercício 1: <br>";
    for($x=1;$x<=10;$x++)
    {
        echo "tabuada do numero $x : <br>";
        for ($y=1;$y<=10;$y++)
        {
            echo $x*$y;
            echo "<br> <br>";
        }
    }
    
    $a=1;
    $b=1;
    echo "Com while : <br>";
    while($a<=10)
    {
        echo "tabuada do numero $a : <br>";
        while($b<=10)
        {
            echo $a*$b;
            echo "<br> <br>";
            $b++;
        }
        $b =1;
        $a++;
    }
    ?>
</body>
</html>