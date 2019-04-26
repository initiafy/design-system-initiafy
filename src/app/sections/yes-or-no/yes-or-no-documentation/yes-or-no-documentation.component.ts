import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-or-no-documentation',
  templateUrl: './yes-or-no-documentation.component.html',
  styleUrls: ['./yes-or-no-documentation.component.scss']
})
export class YesOrNoDocumentationComponent implements OnInit {
  public componentName = 'YesOrNoService';
  public module = 'InitiafyYesOrNoModule';

  constructor() { }

  ngOnInit() {
  }

}
