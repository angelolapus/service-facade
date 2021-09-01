import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonIdentificationDemoComponent } from './pokemon-identification-demo.component';

const routes: Routes = [{ path: '', component: PokemonIdentificationDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonIdentificationDemoRoutingModule { }
