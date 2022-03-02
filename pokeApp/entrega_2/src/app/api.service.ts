import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addPokemon(data) {
    return this.http.post('http://localhost/M14_apps_hibridas/pokeApp/backend/insert.php', data);
  }

  apiPokemons(data) {
    return this.http.post('http://localhost/M14_apps_hibridas/pokeApp/backend/read_all_pokemon.php', data);
  }

  listPokedex() {
    return this.http.get('http://localhost/M14_apps_hibridas/pokeApp/backend/read_pokedex.php');
  }

  deletePokemon(data) {
    return this.http.post('http://localhost/M14_apps_hibridas/pokeApp/backend/delete.php', data);
  }

  updatePokemon(data) {
    return this.http.post('http://localhost/M14_apps_hibridas/pokeApp/backend/update.php', data);
  }
}
