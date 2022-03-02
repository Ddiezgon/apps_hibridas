import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  ngOnInit() {
  }

  pokedex:any = [];

  constructor(
    public _apiService: ApiService
  ) { this.listPokedex(); }

  listPokedex() {
    this._apiService.listPokedex().subscribe((response) => {
      this.pokedex = response;
      console.log(response);
    });
  }

  removePokemon(i) {
    this.deletePokemon(this.pokedex[i].numero, i);
  }

  deletePokemon(numeroPokemon, i) {
    for (let pokemon of this.pokedex) {
      if (pokemon.numero == numeroPokemon) {
        console.log(pokemon);
        this._apiService.deletePokemon(numeroPokemon).subscribe((response) => {
          console.log(response);
          if (response["message"] == "OK") { this.pokedex.splice(i, 1); }
          else console.log("No se pudo eliminar");
        });
        break;
      }
    }
  }

}
