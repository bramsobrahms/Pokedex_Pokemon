import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokeYellowComponent } from './modal-poke-yellow.component';

describe('ModalPokeYellowComponent', () => {
  let component: ModalPokeYellowComponent;
  let fixture: ComponentFixture<ModalPokeYellowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPokeYellowComponent]
    });
    fixture = TestBed.createComponent(ModalPokeYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
