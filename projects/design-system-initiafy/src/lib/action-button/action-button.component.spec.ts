import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTooltipModule } from '@angular/material/tooltip';
import { InitiafyIconModule } from '../icon/icon.module';

import { ActionButtonComponent } from './action-button.component';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionButtonComponent ],
      imports: [MatTooltipModule, InitiafyIconModule]
    });
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
