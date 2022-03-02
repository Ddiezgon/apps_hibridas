import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploScrollInfinitoPageRoutingModule } from './ejemplo-scroll-infinito-routing.module';

import { EjemploScrollInfinitoPage } from './ejemplo-scroll-infinito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploScrollInfinitoPageRoutingModule
  ],
  declarations: [EjemploScrollInfinitoPage]
})
export class EjemploScrollInfinitoPageModule {}
