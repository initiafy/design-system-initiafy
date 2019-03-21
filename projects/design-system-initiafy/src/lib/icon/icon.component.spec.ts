import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from '../icon/icon.component';
import { MatTooltipModule } from '@angular/material';
import { DebugElement } from '@angular/core';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        IconComponent
      ],
      imports: [
        MatTooltipModule
      ]
    });
    
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When testing iconFont classes', () => {

    beforeEach(() => {
      de = fixture.debugElement.query(By.css('i'));
    });

    it('should show default iconFont if its variable is empty', () => {
      expect(de.nativeElement.className).toContain('material-icons');
    });

    it('should show specific iconFont if its variable is passed', () => { 
      component.iconFont = 'font-awesome-brand';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.context.iconFont).toBe('font-awesome-brand')
    });

  });

  describe('When testing icon text', () => {

    beforeEach(() => {
      de = fixture.debugElement.query(By.css('i'));
    });

    it('should show text icon if iconFont is empty', () => {
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('icon-name');
    });

    it('should show text icon if iconFont is NOT font-awesome', () => {
      component.icon = 'glyphicon';
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('icon-name');
    });

    it('should NOT show text icon if iconFont is font-awesome', () => {
      component.icon = 'icon-name';
      component.iconFont = 'font-awesome';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('');
    });

  });

  describe('Init Testing getIconClasses', () => {

    it('should return default icon class when iconFont is empty', () => {
      let iconClasses = component.getIconClasses();
      expect(iconClasses).toBe('material-icons');
    });

    it('should return font awesome icon class when iconFont is font-awesome', () => {
      component.iconFont = 'font-awesome';
      fixture.detectChanges();
      let iconClasses = component.getIconClasses();
      expect(iconClasses).toContain('fa-');
    });

    it('should return glyphicon icon class when iconFont is glyphicon', () => {
      component.iconFont = 'glyphicon';
      fixture.detectChanges();
      let iconClasses = component.getIconClasses();
      expect(iconClasses).toContain('glyphicon');
    });

  });

  describe('Init Testing showText', () => {

    it('should return false if iconFont is font-awesome', () => {
      component.iconFont = 'font-awesome';
      fixture.detectChanges();
      let showText = component.showText();
      expect(showText).toBeFalsy();
    });

    it('should return true if iconFont is any other font than font-awesome', () => {
      component.iconFont = 'glyphicon';
      fixture.detectChanges();
      let showText = component.showText();
      expect(showText).toBeTruthy();
    });

    it('should return true if iconFont is empty', () => {
      let showText = component.showText();
      expect(showText).toBeTruthy();
    });

  });
  
});

