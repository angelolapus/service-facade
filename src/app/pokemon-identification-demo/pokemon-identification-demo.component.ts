import { Component, OnInit } from '@angular/core';
import { PokemonIdentfication } from 'angelolapus-pokemon-service';
import { PokemonIdentificationFacadeService } from 'projects/angelolapus-service-facade/src/public-api';

@Component({
  selector: 'app-pokemon-identification-demo',
  templateUrl: './pokemon-identification-demo.component.html',
  styleUrls: ['./pokemon-identification-demo.component.scss']
})
export class PokemonIdentificationDemoComponent implements OnInit {

  constructor(private pokemonIdentificationFacade:PokemonIdentificationFacadeService) { }

  ngOnInit(): void {
    this.pokemonIdentificationFacade.getPokemon('pikachu');
    this.pokemonIdentificationFacade.pokemon$.subscribe((response: any)=>{
      console.log('pokemon ', response);
    })
  }

}
