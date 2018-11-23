import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTenseComponent } from './present-tense.component';

describe('PresentTenseComponent', () => {
  let component: PresentTenseComponent;
  let fixture: ComponentFixture<PresentTenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentTenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
