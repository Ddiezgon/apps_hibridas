import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  constructor() { }

  pokedex = [
    {
      "nombre": "Pikachu",
      "nombre2": "pikachu",
      "numero": 25,
      "tipo1": "eléctrico",
      "tipo2": "-",
      "img": "pikachu.png",
    },
    {
      "nombre": "Charmander",
      "nombre2": "charmander",
      "numero": 4,
      "tipo1": "fuego",
      "tipo2": "-",
      "img": "charmander.png",
    },
    {
      "nombre": "Gyarados",
      "nombre2": "gyarados",
      "numero": 130,
      "tipo1": "agua",
      "tipo2": "volador",
      "img": "gyarados.png",
    },
  ]

  ngOnInit() {
  }

}
