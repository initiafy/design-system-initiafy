import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiafyRatingComponent } from './rating.component';

describe('InitiafyRatingComponent', () => {
  let component: InitiafyRatingComponent;
  let fixture: ComponentFixture<InitiafyRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiafyRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiafyRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
