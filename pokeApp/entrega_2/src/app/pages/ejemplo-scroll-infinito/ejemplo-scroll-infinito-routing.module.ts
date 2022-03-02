import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploScrollInfinitoPage } from './ejemplo-scroll-infinito.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploScrollInfinitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploScrollInfinitoPageRoutingModule {}
