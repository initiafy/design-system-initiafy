import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class InitiafyRatingComponent implements OnInit {

  /** Total of stars for rating */
  @Input() total: number = 5;
  /** Rate */
  @Input() rate: number;
  /** If element is only showing rate stars and not rating */
  @Input() readOnly: boolean = false;
  /** Callback when selecting a rate star */
  @Output() callback = new EventEmitter();

  public array: Array<Number> = [];

  constructor() { }

  ngOnInit() {
    this.array = this.generateArray();
  }

  private generateArray(): Array<Number> {
    const array = [];
    const total = this.total;
    for (let i = 1; i <= total; i++) { array.push(i); }
    return array;
  }

  chooseRating(rating: number) {
    if (this.readOnly) {
      return;
    }
    this.rate = rating;
    this.callback.emit(rating);
  }

}
