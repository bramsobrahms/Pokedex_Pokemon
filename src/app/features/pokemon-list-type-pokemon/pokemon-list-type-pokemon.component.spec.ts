import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListTypePokemonComponent } from './pokemon-list-type-pokemon.component';

describe('PokemonListTypePokemonComponent', () => {
  let component: PokemonListTypePokemonComponent;
  let fixture: ComponentFixture<PokemonListTypePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListTypePokemonComponent]
    });
    fixture = TestBed.createComponent(PokemonListTypePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
