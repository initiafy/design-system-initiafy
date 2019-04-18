import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiafy-loading-card',
  templateUrl: './loading-card.component.html',
  styleUrls: ['./loading-card.component.scss']
})
export class LoadingCardComponent implements OnInit {
  @Input() cssClass: string = '';
  @Input() size: 'small' | 'std' | 'medium' | 'big' = 'std';
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  get classes() {
    return this.cssClass + ' ' + this.size;
  }

}
