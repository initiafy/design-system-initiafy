import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesOrNoDocumentationComponent } from './yes-or-no-documentation.component';

describe('YesOrNoDocumentationComponent', () => {
  let component: YesOrNoDocumentationComponent;
  let fixture: ComponentFixture<YesOrNoDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesOrNoDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesOrNoDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
