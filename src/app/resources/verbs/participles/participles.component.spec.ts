import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiplesComponent } from './participles.component';

describe('ParticiplesComponent', () => {
  let component: ParticiplesComponent;
  let fixture: ComponentFixture<ParticiplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticiplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
