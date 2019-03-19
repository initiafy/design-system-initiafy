import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() design: 'main' | 'stroke' | 'basic' = 'main';
  @Input() color: 'primary' | 'secondary';
  @Input() label: string;
  @Input() type: 'submit' | 'reset' | 'button' = 'submit';
  @Input() icon: string;
  @Input() iconFont:
    | 'font-awesome-brand'
    | 'font-awesome-solid'
    | 'material-icons' = 'material-icons';
  @Input() tooltip: string;
  @Input() disabled = false;
  @Output() callback = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
