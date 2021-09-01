import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'angelolapus-pokemon-service';
import { PokemonPoolFacadeService } from 'projects/angelolapus-service-facade/src/public-api';

@Component({
  selector: 'app-pokemon-pool-facade-demo',
  templateUrl: './pokemon-pool-facade-demo.component.html',
  styleUrls: ['./pokemon-pool-facade-demo.component.scss']
})
export class PokemonPoolFacadeDemoComponent implements OnInit {

  pokemons:Array<Pokemon> = new Array<Pokemon>();
  constructor(private pokemonPoolFacade:PokemonPoolFacadeService) { }

  ngOnInit(): void {
    this.pokemonPoolFacade.getAllPokemons.subscribe((response:Pokemon[])=>{
      this.pokemons = response;
      console.log('response:', response);
    });

    this.pokemonPoolFacade.getPokemonPoolFacadeError.subscribe((response:any)=>{
      if(response){
        alert(response);
      }
    });
  }

  getAllPokemon(){
    this.pokemonPoolFacade.loadAllPokemons();
  }

}
