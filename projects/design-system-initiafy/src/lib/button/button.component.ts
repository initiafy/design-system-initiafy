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
  @Input() iconFont:
    | 'glyphicon'
    | 'font-awesome-brand'
    | 'font-awesome-solid'
    | 'material-icons' = 'material-icons';
  @Input() tooltip: string;
  @Input() disabled = false;
  @Input() buttonClasses = '';
  @Output() callback = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.design === 'white') {
      this.color = null;
    }
  }
}
