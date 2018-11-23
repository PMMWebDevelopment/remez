import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarPointComponent } from './grammar-point.component';

describe('GrammarPointComponent', () => {
  let component: GrammarPointComponent;
  let fixture: ComponentFixture<GrammarPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
