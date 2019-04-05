import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';
import { Buttons } from 'src/app/models/buttons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  providers: [ ButtonsService ]
})
export class ButtonsComponent implements OnInit {
  public componentName = 'ButtonComponent';
  public module = 'InitiafyButtonModule';
  public buttons: Array<Array<Buttons>> = [];

  constructor(
    private buttonsService: ButtonsService
  ) {}

  ngOnInit() {
    this.buttons.push(this.buttonsService.getButtons('main', 'primary'));
    this.buttons.push(this.buttonsService.getButtons('main', 'secondary'));
    this.buttons.push(this.buttonsService.getButtons('stroke', 'primary'));
    this.buttons.push(this.buttonsService.getButtons('stroke', 'secondary'));
    this.buttons.push(this.buttonsService.getButtons('white', ''));
    this.buttons.push(this.buttonsService.getButtons('basic', ''));
  }

}
