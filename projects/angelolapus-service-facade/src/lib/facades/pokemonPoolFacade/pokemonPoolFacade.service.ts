
import { Injectable } from '@angular/core';
import { Pokemon, PokemonPoolService } from 'angelolapus-pokemon-service';
import { Observable } from 'rxjs';
import { pluck} from 'rxjs/operators'
import { CodeGetResponse } from '../../codeGetResponse/codeGetResponse';

class State{
  pokemonPool:CodeGetResponse<Pokemon[]> = new CodeGetResponse<Pokemon[]>();
  error:CodeGetResponse<any> = new CodeGetResponse();
}

@Injectable({
  providedIn: 'root'
})
export class PokemonPoolFacadeService {

  private state = new State();

  get getAllPokemons():Observable<Pokemon[]>{
    return this.state.pokemonPool.getResponse();
  }

  get getPokemonPoolFacadeError():Observable<any>{
    return this.state.error.getErrorResponse();
  }

  constructor(private pokemonPoolService: PokemonPoolService) { }

  loadAllPokemons(){
    this.state.pokemonPool.clear();
    this.pokemonPoolService.getAllPokemon().pipe(
      pluck('results'),
    ).subscribe((response:Pokemon[]) =>{
      this.state.pokemonPool.set(response);
    },(error:any)=>{
      this.state.error.setError(error);
    });
  }

  reset(){
    this.state = new State();
  }

}

