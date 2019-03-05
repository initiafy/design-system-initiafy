import { Component, OnInit, Input } from '@angular/core';

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
