import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIdentificationDemoComponent } from './pokemon-identification-demo.component';

describe('PokemonIdentificationDemoComponent', () => {
  let component: PokemonIdentificationDemoComponent;
  let fixture: ComponentFixture<PokemonIdentificationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonIdentificationDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonIdentificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
