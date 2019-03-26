import { Component, Input } from '@angular/core';

@Component({
  selector: 'initiafy-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() size: 'small' | 'standard' | 'medium' | 'big' | 'bigger'= 'standard';

  constructor() { }

}
