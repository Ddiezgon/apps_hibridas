<?php
    include_once "config.php";

    $limit = $_POST['limit'];
    $offset = $_POST['offset'];

    $all_pokemon = array();

    $request_url = 'https://pokeapi.co/api/v2/pokemon?limit=' . $limit . '&offset=' . $offset;
    $curl = curl_init($request_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);

    $input = json_decode($response, true);

    foreach($input['results'] as $result) {

        $pokemon_request_url = $result['url'];
        $pokemon_curl = curl_init($pokemon_request_url);
        curl_setopt($pokemon_curl, CURLOPT_RETURNTRANSFER, true);
        $pokemon_response = curl_exec($pokemon_curl);
        curl_close($pokemon_curl);

        $pokemon_input = json_decode($pokemon_response, true);

        $pokemon = new stdClass();
        $pokemon->nombre = $pokemon_input['name'];
        $pokemon->numero = $pokemon_input['id'];
        $pokemon->tipo1 = $pokemon_input['types']['0']['type']['name'];
        $pokemon->tipo2 = $pokemon_input['types']['1']['type']['name'];
        $pokemon->img = $pokemon_input['sprites']['front_default'];

        array_push($all_pokemon, $pokemon);
    }

    echo json_encode($all_pokemon);
?>