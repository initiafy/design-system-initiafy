import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  public componentName = 'IconComponent';
  public module = 'InitiafyIconModule';
  public showCode: boolean = false;

  constructor() {}

}
