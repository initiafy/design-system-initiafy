import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarDocumentationComponent implements OnInit {
  public componentName = 'ActionBarComponent';
  public module = 'InitiafyActionBarModule';

  constructor() { }

  ngOnInit() {
  }

}
