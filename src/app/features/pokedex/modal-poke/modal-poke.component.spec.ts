import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokeComponent } from './modal-poke.component';

describe('ModalPokeComponent', () => {
  let component: ModalPokeComponent;
  let fixture: ComponentFixture<ModalPokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPokeComponent]
    });
    fixture = TestBed.createComponent(ModalPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
