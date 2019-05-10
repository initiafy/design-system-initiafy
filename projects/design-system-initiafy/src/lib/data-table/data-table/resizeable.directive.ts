import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[initiafyResizeable]'
})
export class ResizeableDirective {

  constructor(private el: ElementRef) {
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

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    this.highlightBorder();
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; //x position within the element.
    // const y = event.clientY - rect.top;  //y position within the element.
    if (x < (parseInt(this.width.slice(0, -2), 10) / 2)) {
      this.highlighLeftBorder();
    } else {
      this.highlightRightBorder();
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
    this.unHighlightBorder();
  }

  private highlightBorder(): void {
    this.el.nativeElement.style.borderLeft = '1px solid black';
    this.el.nativeElement.style.borderRight = '1px solid black';
  }
  private unHighlightBorder(): void {
    this.el.nativeElement.style.borderLeft = 'none';
    this.el.nativeElement.style.borderRight = 'none';
  }
  private highlighLeftBorder(): void {
    this.el.nativeElement.style.borderLeft = '1px solid black';
    this.el.nativeElement.style.borderRight = 'none';
  }
  private highlightRightBorder(): void {
    this.el.nativeElement.style.borderRight = '1px solid black';
    this.el.nativeElement.style.borderLeft = 'none';
  }

}
