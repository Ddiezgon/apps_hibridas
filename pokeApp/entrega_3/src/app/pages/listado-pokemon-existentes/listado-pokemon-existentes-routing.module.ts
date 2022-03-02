import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPokemonExistentesPage } from './listado-pokemon-existentes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPokemonExistentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPokemonExistentesPageRoutingModule {}
