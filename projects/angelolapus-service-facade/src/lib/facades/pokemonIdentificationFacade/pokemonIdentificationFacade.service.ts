import { Injectable } from '@angular/core';
import { PokemonIdentfication, PokemonIdentificationService } from 'angelolapus-pokemon-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CodeGetResponse } from '../../codeGetResponse/codeGetResponse';

class State {
  pokemon:CodeGetResponse<any> = new CodeGetResponse<any>();
  error: CodeGetResponse<any> = new CodeGetResponse<any>();
}

@Injectable({
  providedIn: 'root'
})
export class PokemonIdentificationFacadeService {

  private state = new State();

  get pokemon$():Observable<PokemonIdentfication>{
    return this.state.pokemon.getResponse();
  }

  get error$():Observable<PokemonIdentfication>{
    return this.state.error.getResponse();
  }

  constructor(private pokemonIdentificationService: PokemonIdentificationService) { }

  getPokemon(name: string){
    this.state.pokemon.clear();
    this.pokemonIdentificationService.getPokemon(name)
    .subscribe((response:PokemonIdentfication)=>{
      this.state.pokemon.set(response);
    },(error:any)=>{
      this.state.error.set(error);
    });
  }

  reset(){
    this.state = new State();
  }

}
