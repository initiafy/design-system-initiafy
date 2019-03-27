import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() design: 'main' | 'stroke' | 'basic' | 'white' = 'main';
  @Input() color: 'primary' | 'secondary';
  @Input() label: string;
  @Input() type: 'submit' | 'reset' | 'button' = 'submit';
  @Input() icon: string;
  @Input() iconFont: 'initiafy-icons' | 'glyphicon' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' = 'material-icons';
  @Input() buttonClasses: string = '';
  @Input() tooltip: string;
  @Input() disabled = false;
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
    if (this.buttonClasses) {
      this._classes += ' ' + this.buttonClasses;
    }
  }
}
