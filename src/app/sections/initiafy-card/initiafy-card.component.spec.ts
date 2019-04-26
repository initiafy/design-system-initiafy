import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiafyCardComponent } from './initiafy-card.component';

describe('InitiafyCardComponent', () => {
  let component: InitiafyCardComponent;
  let fixture: ComponentFixture<InitiafyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiafyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiafyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
