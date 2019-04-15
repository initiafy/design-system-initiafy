import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
import { SnackBarData } from '../models/snack-bar-data';

@Component({
  selector: 'initiafy-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public dismiss(): void {
    this.snackBar.dismiss();
  }

  public action(): void {
    this.snackBar.dismiss();
    if (this.data.actionButtonFunction) {
      this.data.actionButtonFunction();
    }
  }
}
