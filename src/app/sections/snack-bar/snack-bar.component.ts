import { Component, OnInit } from '@angular/core';
import { SnackBarModel } from 'projects/design-system-initiafy/src/lib/snack-bar/models/snack-bar-model';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  public componentName = 'SnackBarComponent';
  public module = 'InitiafySnackBarModule';
  public data: SnackBarModel;

  constructor() { }

  ngOnInit() {
    this.data = {
      icon: 'done',
      message: 'User deleted successfully',
      actionButtonLabel: 'Undo',
      actionButtonFunction: () => true,
      closeButton: true
    };
  }

}
