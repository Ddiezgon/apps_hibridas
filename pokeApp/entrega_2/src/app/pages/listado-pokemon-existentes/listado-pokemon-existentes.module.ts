import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPokemonExistentesPageRoutingModule } from './listado-pokemon-existentes-routing.module';

import { ListadoPokemonExistentesPage } from './listado-pokemon-existentes.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPokemonExistentesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoPokemonExistentesPage]
})
export class ListadoPokemonExistentesPageModule {}
