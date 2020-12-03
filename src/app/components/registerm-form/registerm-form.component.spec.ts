import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermFormComponent } from './registerm-form.component';

describe('RegistermFormComponent', () => {
  let component: RegistermFormComponent;
  let fixture: ComponentFixture<RegistermFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
