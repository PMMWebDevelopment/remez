import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureTenseComponent } from './future-tense.component';

describe('FutureTenseComponent', () => {
  let component: FutureTenseComponent;
  let fixture: ComponentFixture<FutureTenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureTenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
