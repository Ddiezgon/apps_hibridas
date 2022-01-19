import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  nombre;
  numero;
  tipo1;
  tipo2;
  img;

  constructor(
    public _apiService: ApiService
  ) { }

  selectedFile(event) {
    this.img = event.target.files[0];
  }

  addPokemon() {
    let nombre2 = this.nombre.toLowerCase();
    let data = new FormData();
    data.append("nombre", this.nombre);
    data.append("nombre2", nombre2);
    data.append("numero", this.numero);
    data.append("tipo1", this.tipo1);
    data.append("tipo2", this.tipo2);
    data.append("img", this.img);
    // img: this.nombre.toLowerCase() + ".png",
    
    console.log(this.img);

    this._apiService.addPokemon(data).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
