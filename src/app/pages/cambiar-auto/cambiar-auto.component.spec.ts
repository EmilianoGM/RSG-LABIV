import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarAutoComponent } from './cambiar-auto.component';

describe('CambiarAutoComponent', () => {
  let component: CambiarAutoComponent;
  let fixture: ComponentFixture<CambiarAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
