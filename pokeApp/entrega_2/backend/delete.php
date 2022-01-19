<?php
    include_once "config.php";

    $input = file_get_contents('php://input');
    $numeroPokemon = json_decode($input, true);
    $response = array();

    $delete = mysqli_query($con, "DELETE FROM pokemons WHERE NUMERO=$numeroPokemon");

    if($delete){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);

?>