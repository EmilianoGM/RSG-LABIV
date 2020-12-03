import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosFormComponent } from './autos-form.component';

describe('AutosFormComponent', () => {
  let component: AutosFormComponent;
  let fixture: ComponentFixture<AutosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
