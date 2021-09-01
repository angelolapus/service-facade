/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonIdentificationFacadeService } from './pokemonIdentificationFacade.service';

describe('Service: PokemonIdentificationFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonIdentificationFacadeService]
    });
  });

  it('should ...', inject([PokemonIdentificationFacadeService], (service: PokemonIdentificationFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
