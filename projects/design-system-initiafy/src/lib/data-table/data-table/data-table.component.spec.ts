import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiafyDataTableComponent } from './data-table.component';

describe('InitiafyDataTableComponent', () => {
  let component: InitiafyDataTableComponent<any>;
  let fixture: ComponentFixture<InitiafyDataTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiafyDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiafyDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
