import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() design: string = '';
  @Input() color: string = '';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconFont: string = 'material-icons';
  @Input() tooltip: string = '';
  @Input() disabled: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  getButtonClasses() {
    if (!!this.label) {
      return 'button ' + this.design + ' ' + this.color;
    }
    return 'button single ' + this.design + ' ' + this.color;   
  }

}

export class Button {
  method: Function;
  design?: string;
  color?: string;
  label?: string;
  icon?: string;
  iconFont?: string;
  tooltip?: string;
  disabled: () => boolean;
  hasPermission?: () => boolean;
  constructor() {
    this.hasPermission = () => true;
  }
}
