<?php
    include_once "config.php";

    $pokedex = array();
    $temp = array();

    $select = mysqli_query($con, "SELECT * FROM pokemons ORDER BY NUMERO ASC");

    while ($pokemon = $select->fetch_array()) {
        $pokemon = array(
            'numero' => $pokemon[0],
            'nombre' => $pokemon[1],
            'nombre2' => $pokemon[2],
            'tipo1' => $pokemon[3],
            'tipo2' => $pokemon[4],
            'img' => $pokemon[5],
        );
        array_push($pokedex, $pokemon);
    }

    if ($select) {
        $result = json_encode($pokedex);
    }
    else {
        $result = json_encode(array('message'=>"KO"));
    }

    echo $result;
?>