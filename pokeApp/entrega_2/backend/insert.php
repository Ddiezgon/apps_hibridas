<?php
    include_once "config.php";
    
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $nombre = $_POST["nombre"];
    $nombre2 = $_POST["nombre2"];
    $numero = $_POST["numero"];
    $tipo1 = $_POST["tipo1"];
    $tipo2 = $_POST["tipo2"];
    $img = $_FILES["img"];

    $ruta_imagen = gestionarImagen($img, $nombre2, $numero);

    $sql = mysqli_query($con, "INSERT INTO pokemons (NUMERO, NOMBRE, NOMBRE2, TIPO1, TIPO2, IMG) VALUES ($numero, '$nombre', '$nombre2', '$tipo1', '$tipo2', '$ruta_imagen ')");
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);

    function gestionarImagen($img, $nombre_pokemon, $numero_pokemon) {
        global $response;
        $dir = "img/";
        $nombre_imagen = $numero_pokemon . "_" . $nombre_pokemon;
        $response["nombre_imagen"] = $nombre_imagen;
        $ruta_imagen = subirImagen($dir, $nombre_imagen, $img);
        return $ruta_imagen;
    }

    function subirImagen($dir, $nombre_imagen, $img) {
        global $response;
        $ruta_imagen = $dir . $nombre_imagen;
        $response["mover_fichero"] = move_uploaded_file($img['tmp_name'], $ruta_imagen);

        if ($response["mover_fichero"] == true) {
            return $ruta_imagen;
        }
        else {
            return "";
        }
    }
?>