<?php
    include_once "config.php";
    
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $nombre = $data["nombre"];
    $nombre2 = $data["nombre2"];
    $numero = $data["numero"];
    $tipo1 = $data["tipo1"];
    $tipo2 = $data["tipo2"];
    $img = $data["img"];

    if (!empty($nombre)) {
        $update = mysqli_query($con, "UPDATE pokemons SET NOMBRE='$nombre', NOMBRE2='$nombre2', IMG='$img' WHERE NUMERO=$numero");
        if($update){
            $response["update_nombre"] = "OK";
        }else{
            $response["update_nombre"] = "KO";
        }
    }

    if (!empty($tipo1)) {
        $update = mysqli_query($con, "UPDATE pokemons SET TIPO1='$tipo1' WHERE NUMERO=$numero");
        if($update){
            $response["update_tipo1"] = "OK";
        }else{
            $response["update_tipo1"] = "KO";
        }
    }

    if (!empty($tipo2)) {
        $update = mysqli_query($con, "UPDATE pokemons SET TIPO2='$tipo2' WHERE NUMERO=$numero");
        if($update){
            $response["update_tipo2"] = "OK";
        }else{
            $response["update_tipo2"] = "KO";
        }
    }

    echo json_encode($response);
?>