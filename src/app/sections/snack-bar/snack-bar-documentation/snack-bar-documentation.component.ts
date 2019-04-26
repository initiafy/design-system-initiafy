import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar-documentation',
  templateUrl: './snack-bar-documentation.component.html',
  styleUrls: ['./snack-bar-documentation.component.scss']
})
export class SnackBarDocumentationComponent implements OnInit {
  public componentName = 'SnackBarService';
  public module = 'InitiafySnackBarModule';
  public classes = ['Error'];

  constructor() { }

  ngOnInit() { }

}
