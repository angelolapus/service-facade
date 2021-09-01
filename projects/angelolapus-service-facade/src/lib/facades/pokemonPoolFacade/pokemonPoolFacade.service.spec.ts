/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonPoolFacadeService } from './pokemonPoolFacade.service';

describe('Service: PokemonPoolFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonPoolFacadeService]
    });
  });

  it('should ...', inject([PokemonPoolFacadeService], (service: PokemonPoolFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
