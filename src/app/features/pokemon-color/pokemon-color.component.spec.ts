import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonColorComponent } from './pokemon-color.component';

describe('PokemonColorComponent', () => {
  let component: PokemonColorComponent;
  let fixture: ComponentFixture<PokemonColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonColorComponent]
    });
    fixture = TestBed.createComponent(PokemonColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
