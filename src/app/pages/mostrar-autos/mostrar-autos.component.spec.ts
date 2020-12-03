import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAutosComponent } from './mostrar-autos.component';

describe('MostrarAutosComponent', () => {
  let component: MostrarAutosComponent;
  let fixture: ComponentFixture<MostrarAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
