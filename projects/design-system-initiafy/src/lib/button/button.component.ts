import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() design = '';
  @Input() color = '';
  @Input() label = '';
  @Input() icon = '';
  @Input() iconFont = 'material-icons';
  @Input() tooltip = '';
  @Input() disabled = false;

  constructor() {}

  ngOnInit() {}

  getButtonClasses() {
    if (!!this.label) {
      return 'button ' + this.design + ' ' + this.color;
    }
    return 'button single ' + this.design + ' ' + this.color;
  }
}
