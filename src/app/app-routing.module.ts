import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemonPoolFacadeDemo', loadChildren: () => import('./pokemon-pool-facade-demo/pokemon-pool-facade-demo.module').then(m => m.PokemonPoolFacadeDemoModule)
  },
  { path: 'pokemonIdentification', loadChildren: () => import('./pokemon-identification-demo/pokemon-identification-demo.module').then(m => m.PokemonIdentificationDemoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
