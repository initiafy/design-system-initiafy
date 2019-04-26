import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnackBarModel } from './models/snack-bar-model';

@Component({
  selector: 'initiafy-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  @Input() data: SnackBarModel;
  @Output() close = new EventEmitter;

  constructor() { }

}
