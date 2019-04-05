import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default class', () => {
    expect(de.nativeElement.className).toContain('initiafy-card');
  });

});
