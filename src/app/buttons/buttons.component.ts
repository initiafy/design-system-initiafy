import { Component, OnInit } from '@angular/core';
import { DocumentationService, Child } from '../core/documentation.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  title = 'button';
  public componentName = 'ButtonComponent';
  showCode: boolean;
  docs: Child;
  constructor() {}

  ngOnInit() {}
}
