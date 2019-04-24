import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /** Design of the button */
  @Input() design: 'main' | 'stroke' | 'basic' | 'white' = 'main';
  /** Color palette of the button */
  @Input() color: 'primary' | 'secondary';
  /** Text label for the button  */
  @Input() label: string;
  /** Type attribute of the button */
  @Input() type: 'submit' | 'reset' | 'button' = 'submit';
  /** Icon name of icon to appear */
  @Input() icon: string;
  /** Icon library to whivh the icon belongs */
  @Input() iconFont: 'initiafy' | 'glyphicon' | 'font-awesome' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' | 'material-outlined' = 'material-icons';
  /** Additional css classes to apply to the button */
  @Input() cssClass: string = '';
  /** Text for the button's tooltip */
  @Input() tooltip: string = '';
  /** Disable state of the button */
  @Input() disabled = false;
  /** Hide label on mobile screens  */
  @Input() hideLabelOnMobile: boolean = false;
  /** Method called when button is clicked */
  @Output() callback = new EventEmitter();

  private _classes: string;

  get classes() {
    return this._classes;
  }

  constructor() {}

  ngOnInit() {
    this.returnClasses();
  }

  private returnClasses() {
    this._classes = this.design;
    if (this.design !== 'white' && this.color) {
      this._classes += ' ' + this.color;
    }
    if (this.hideLabelOnMobile) {
      this._classes += ' hide-label-on-mobile';
    }
    if (this.cssClass) {
      this._classes += ' ' + this.cssClass;
    }
  }
}