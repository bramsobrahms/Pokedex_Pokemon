import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokeGreenComponent } from './modal-poke-green.component';

describe('ModalPokeGreenComponent', () => {
  let component: ModalPokeGreenComponent;
  let fixture: ComponentFixture<ModalPokeGreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPokeGreenComponent]
    });
    fixture = TestBed.createComponent(ModalPokeGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
