import { Component, OnInit } from '@angular/core';
import { YesOrNoModel } from 'projects/design-system-initiafy/src/lib/yes-or-no/models/yes-or-no-model';

@Component({
  selector: 'app-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.scss']
})
export class YesOrNoComponent implements OnInit {
  public componentName = 'YesOrNoComponent';
  public module = 'InitiafyYesOrNoModule';
  public data: YesOrNoModel;

  constructor() {}

  ngOnInit() {
    this.data = {
      title: '',
      message: 'Are you sure?',
      yesButtonLabel: 'Confirm',
      noButtonLabel: 'Cancel'
    };
  }

}
