import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokeRedComponent } from './modal-poke-red.component';

describe('ModalPokeRedComponent', () => {
  let component: ModalPokeRedComponent;
  let fixture: ComponentFixture<ModalPokeRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPokeRedComponent]
    });
    fixture = TestBed.createComponent(ModalPokeRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
