import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { PokedexPage } from '../pokedex/pokedex.page';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  
  // id;
  // pokedex:any = PokedexPage.listPokemon();

  // constructor(private route: ActivatedRoute) {
  //   this.id = this.route.snapshot.paramMap.get("id");
  //   console.log(this.id);
  // }

  ngOnInit() {
  }

}
