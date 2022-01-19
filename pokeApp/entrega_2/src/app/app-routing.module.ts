import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pages/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'update/:numeroPokemon',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
