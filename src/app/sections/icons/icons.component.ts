import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  public title = 'icon.html';
  public componentName = 'IconComponent';
  public module = 'InitiafyIconModule';
  constructor() { }

  ngOnInit() {
  }

}
