import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonPoolFacadeDemoRoutingModule } from './pokemon-pool-facade-demo-routing.module';
import { PokemonPoolFacadeDemoComponent } from './pokemon-pool-facade-demo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PokemonPoolFacadeDemoComponent
  ],
  imports: [
    CommonModule,
    PokemonPoolFacadeDemoRoutingModule,
  ],
  providers:[
  ]
})
export class PokemonPoolFacadeDemoModule { }
