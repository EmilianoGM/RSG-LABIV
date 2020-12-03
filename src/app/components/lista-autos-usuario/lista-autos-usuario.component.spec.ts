import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutosUsuarioComponent } from './lista-autos-usuario.component';

describe('ListaAutosUsuarioComponent', () => {
  let component: ListaAutosUsuarioComponent;
  let fixture: ComponentFixture<ListaAutosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAutosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAutosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
