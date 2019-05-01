import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiafy-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() isLoading = '';
  @Input() mode: 'indeterminate' | 'determinate' = 'indeterminate';
  @Input() value: number = null;

  constructor() { }

  ngOnInit() {
    console.log(this.width);
  }

  get width() {
    if (this.value) {
      return this.value + '%';
    }
  }

}
