import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface YesOrNoDialogData {
  title: string;
  message: string;
  yesButtonLabel: string;
  noButtonLabel?: string;
  width?: string;
}

@Component({
  selector: 'initiafy-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.css']
})
export class YesOrNoDialogComponent implements OnInit {
  constructor(
      public dialogRef: MatDialogRef<YesOrNoDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: YesOrNoDialogData
  ) {}

  ngOnInit() {}

  public closeDialog(): void {
      this.dialogRef.close();
  }
}
