import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDocumentationComponent } from './snack-bar-documentation.component';

describe('SnackBarDocumentationComponent', () => {
  let component: SnackBarDocumentationComponent;
  let fixture: ComponentFixture<SnackBarDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
