import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() design: 'main' | 'stroke' | 'basic' = 'main';
  @Input() color: 'primary' | 'secondary';
  @Input() label: string;
  @Input() icon: string;
  @Input() iconFont: 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' = 'material-icons';
  @Input() tooltip: string;
  @Input() disabled = false;
  @Output() callback = new EventEmitter();

  constructor() {}

  onClick() {
    this.callback.emit();
  }

}
