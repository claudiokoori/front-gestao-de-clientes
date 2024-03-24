import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro } from './registro.component';

describe('ConteudoPrincipalComponent', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Registro]
    });
    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
