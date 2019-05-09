import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[initiafyResizeable]'
})
export class ResizeableDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

  get styles(): CSSStyleDeclaration {
    return getComputedStyle(this.el.nativeElement, null);
  }
  get width(): string {
    return this.styles.getPropertyValue('width');
  }
  set width(val: string) {
    this.el.nativeElement.style.width = val;
  }
  get flexBasis(): string {
    return this.styles.getPropertyValue('flex-basis');
  }
  set flexBasis(val: string) {
    this.el.nativeElement.style.flexBasis = val;
  }
  get flexGrow(): string {
    return this.styles.getPropertyValue('flex-grow');
  }
  set flexGrow(val: string) {
    this.el.nativeElement.style.flexGrow = val;
  }
  get flexShrink(): string {
    return this.styles.getPropertyValue('flex-shrink');
  }
  set flexShrink(val: string) {
    this.el.nativeElement.style.flexShrink = val;
  }
  get flex(): string {
    return this.styles.getPropertyValue('flex');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.flexBasis  = '20%';
    console.log({
      width: this.width,
      flexBasis: this.flexBasis,
      flexGrow: this.flexGrow,
      flexShrink: this.flexShrink,
      flex: this.flex
    });
  }

}
