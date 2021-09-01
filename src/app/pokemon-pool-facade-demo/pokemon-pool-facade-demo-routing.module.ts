import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPoolFacadeDemoComponent } from './pokemon-pool-facade-demo.component';

const routes: Routes = [{ path: '', component: PokemonPoolFacadeDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonPoolFacadeDemoRoutingModule { }
