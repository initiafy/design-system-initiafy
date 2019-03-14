import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() design: 'main' | 'stroke' | 'basic' = 'main';
  @Input() color: 'primary' | 'secondary';
  @Input() label: string;
  @Input() icon: string;
  @Input() iconFont: 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' = 'material-icons';
  @Input() tooltip: string;
  @Input() disabled = false;
  @Output() callback = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}

export interface ButtonType {
  design?: 'main' | 'stroke' | 'basic';
  color?: 'primary' | 'secondary';
  label?: string;
  icon?: string;
  iconFont?: 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons';
  tooltip?: string;
  disabled?: boolean;
  callback?: (event: Event) => void;
}
