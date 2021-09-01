import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonIdentificationDemoRoutingModule } from './pokemon-identification-demo-routing.module';
import { PokemonIdentificationDemoComponent } from './pokemon-identification-demo.component';


@NgModule({
  declarations: [
    PokemonIdentificationDemoComponent
  ],
  imports: [
    CommonModule,
    PokemonIdentificationDemoRoutingModule
  ]
})
export class PokemonIdentificationDemoModule { }
