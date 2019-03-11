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
      return this.design + ' ' + this.color;
    }
    return 'single ' + this.design + ' ' + this.color;   
  }

  get designValue(): string {
    return this.design;
  }

  get colorValue(): string {
    return this.color;
  }

  get labelValue(): string {
    return this.label;
  }

  get iconValue(): string {
    return this.icon;
  }

  get iconFontValue(): string {
    return this.iconFont;
  }

  get tooltipValue(): string {
    return this.tooltip;
  }

  get disableValue(): boolean {
    return this.disabled;
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
