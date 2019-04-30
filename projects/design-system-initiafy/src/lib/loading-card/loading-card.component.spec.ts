import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCardComponent } from './loading-card.component';

describe('FormcardComponent', () => {
  let component: LoadingCardComponent;
  let fixture: ComponentFixture<LoadingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});