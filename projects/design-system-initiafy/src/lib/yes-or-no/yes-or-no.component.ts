import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YesOrNoDialogModel } from './models/yes-or-no-model';

@Component({
  selector: 'initiafy-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.scss']
})
export class YesOrNoDialogComponent {
  @Input() data: YesOrNoDialogModel;
  @Output() close = new EventEmitter();

  constructor() {}

}