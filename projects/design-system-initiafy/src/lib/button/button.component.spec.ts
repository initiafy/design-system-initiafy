import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';
import { IconComponent } from '../icon/icon.component';
import { MatTooltipModule } from '@angular/material';
import { DebugElement } from '@angular/core';

fdescribe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttoncomp: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ButtonComponent,
        IconComponent
      ],
      imports: [
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();

    buttoncomp = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show default class', () => { 
    expect(buttoncomp.nativeElement.className).toContain('button');
  });

  it('should show design class', () => {
    
  });

  it('should show color class', () => {
    
  });

  it('should show icon tag if its variable is not empty', () => {
    
  });

  it('should not show icon if its variable is empty', () => {
    
  });

  it('should show icon font if its variable is not empty', () => {
    
  });

  it('should show material icon if iconFont variable is empty', () => {
    
  });

  it('should show label if its variable is not empty', () => {
    
  });

  it('should not show label if its variable is empty', () => {
    
  });

  it('should be a single button if label variable is empty', () => {
    
  });

  it('should show tolltip if its variable is not empty', () => {
    
  });

  it('should not show tolltip if its variable is empty', () => {
    
  });

  it('should be disabled if disable variable is passed as true', () => {
    
  });

  it('should be enabled if disabled variable is passed as true', () => {
    
  });

  it('should be enabled if disabled variable is empty', () => {
    
  });

});
