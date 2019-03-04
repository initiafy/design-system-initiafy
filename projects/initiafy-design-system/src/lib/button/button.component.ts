import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'initiafy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() type: string;
  @Input() color: string;
  @Input() text: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
