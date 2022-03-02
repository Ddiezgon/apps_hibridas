import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  numeroPokemon;
  nombre;
  tipo1;
  tipo2;

  constructor(private route: ActivatedRoute, public _apiService: ApiService) {
    this.numeroPokemon = this.route.snapshot.paramMap.get("numeroPokemon");
    console.log(this.numeroPokemon);
  }

  updatePokemon() {
    if (!this.nombre) { this.nombre = ""; }
    if (!this.tipo1) { this.tipo1 = ""; }
    if (!this.tipo2) { this.tipo2 = ""; }

    let data = {
      nombre: this.nombre,
      nombre2: this.nombre.toLowerCase(),
      numero: this.numeroPokemon,
      tipo1: this.tipo1,
      tipo2: this.tipo2,
      img: this.nombre.toLowerCase() + ".png",
    }

    this._apiService.updatePokemon(data).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
