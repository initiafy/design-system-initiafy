import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconFont: 'initiafy' | 'glyphicon' | 'font-awesome' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' | 'material-outlined' = 'material-icons';
  @Input() tooltip: string = '';
  @Input() cssClass: string = '';
  @Input() size: 'small' | 'big' | 'bigger' = 'big';
  @Input() disabled = false;
  @Output() callback = new EventEmitter();
  
  constructor() { }
  
  get classes() {
    return this.size + ' ' + this.cssClass;
  }

}
