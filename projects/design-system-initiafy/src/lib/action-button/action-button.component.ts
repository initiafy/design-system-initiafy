import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  @Input() label: string;
  @Input() icon: string;
  @Input() iconFont: 'glyphicon' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' = 'material-icons';
  @Input() tooltip: string;
  @Input() size: 'small' | 'regular' | 'bigger' = 'regular';
  @Input() disabled = false;
  @Output() callback = new EventEmitter();
  
  constructor() { }

}
