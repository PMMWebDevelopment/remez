import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFormsComponent } from './other-forms.component';

describe('OtherFormsComponent', () => {
  let component: OtherFormsComponent;
  let fixture: ComponentFixture<OtherFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
