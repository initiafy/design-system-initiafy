import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YesOrNoModel } from './models/yes-or-no-model';

@Component({
  selector: 'initiafy-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.scss']
})
export class YesOrNoComponent {
  @Input() data: YesOrNoModel;
  @Output() close = new EventEmitter();

  constructor() {}

}