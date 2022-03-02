import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-listado-pokemon-existentes',
  templateUrl: './listado-pokemon-existentes.page.html',
  styleUrls: ['./listado-pokemon-existentes.page.scss'],
})
export class ListadoPokemonExistentesPage implements OnInit {

  ngOnInit() {
  }

  all_pokemon: any = [];
  limit = 25;
  offset = 0;

  constructor(public _apiService: ApiService) { 
    this.getPokemons(this.limit, this.offset); 
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.offset = this.offset + this.limit;
      this.getPokemons(this.limit, this.offset);
      event.target.complete();
    }, 500);
  }

  getPokemons(limit, offset) {
    var data = new FormData();
    data.append("limit", limit);
    data.append("offset", offset);
    this._apiService.apiPokemons(data).subscribe((response) => {
      console.log(response);
      this.all_pokemon = this.all_pokemon.concat(response);
    });
  }

  // listAllPokemon() {
  //   this._apiService.listAllPokemon().subscribe((response) => {
  //     this.all_pokemon = response;
  //     console.log(response);
  //   });
  // }

  addPokemon(i) {
    console.log("go away");
  }

}