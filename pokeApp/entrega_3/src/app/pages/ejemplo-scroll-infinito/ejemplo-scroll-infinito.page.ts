import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-ejemplo-scroll-infinito',
  templateUrl: './ejemplo-scroll-infinito.page.html',
  styleUrls: ['./ejemplo-scroll-infinito.page.scss'],
})
export class EjemploScrollInfinitoPage implements OnInit {

  pokemons: any = [];
  limit = 50;
  offset = 0;

  constructor(public _apiService: ApiService) {
    // this.addMoreItems();
    this.getPokemons(this.limit, this.offset);
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.offset = this.offset + this.limit;
      this.getPokemons(this.limit, this.offset);
      // this.addMoreItems()
      event.target.complete();
    }, 500);
  }

  getPokemons(limit, offset) {
    var data = new FormData();
    data.append("limit", limit);
    data.append("offset", offset);
    this._apiService.apiPokemons(data).subscribe((response) => {
      console.log(response);
      this.pokemons = this.pokemons.concat(response);
    });
  }

  // addMoreItems() {
  //   for (let i = 0; i < 10; i++) {
  //     this.pokemons.push(i);
  //   }
  // }

}
