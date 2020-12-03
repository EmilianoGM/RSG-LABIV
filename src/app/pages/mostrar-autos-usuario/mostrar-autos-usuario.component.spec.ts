import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAutosUsuarioComponent } from './mostrar-autos-usuario.component';

describe('MostrarAutosUsuarioComponent', () => {
  let component: MostrarAutosUsuarioComponent;
  let fixture: ComponentFixture<MostrarAutosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAutosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAutosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
