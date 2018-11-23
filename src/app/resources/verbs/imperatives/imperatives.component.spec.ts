import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativesComponent } from './imperatives.component';

describe('ImperativesComponent', () => {
  let component: ImperativesComponent;
  let fixture: ComponentFixture<ImperativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
