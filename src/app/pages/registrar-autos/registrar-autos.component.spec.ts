import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAutosComponent } from './registrar-autos.component';

describe('RegistrarAutosComponent', () => {
  let component: RegistrarAutosComponent;
  let fixture: ComponentFixture<RegistrarAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
