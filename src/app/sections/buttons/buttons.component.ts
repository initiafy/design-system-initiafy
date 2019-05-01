import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';
import { Buttons } from 'src/app/models/buttons';
import { MatSlideToggleChange } from '@angular/material';

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
  public darkBackground: boolean;
  constructor(
    private buttonsService: ButtonsService
  ) {}

  ngOnInit() {
    this.buttons.push(this.buttonsService.getButtons('main', 'primary', 'Main'));
    this.buttons.push(this.buttonsService.getButtons('main', 'secondary', 'Main'));
    this.buttons.push(this.buttonsService.getButtons('stroke', 'primary', 'Stroke'));
    this.buttons.push(this.buttonsService.getButtons('stroke', 'secondary', 'Stroke'));
    this.buttons.push(this.buttonsService.getButtons('white', '', 'White'));
    this.buttons.push(this.buttonsService.getButtons('basic', '', 'Basic'));
  }

  public handleSlideChange(event: MatSlideToggleChange): void {
    this.darkBackground = event.checked;
  }

}
