import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiafy-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() icon = '';
  @Input() iconFont = '';
  @Input() message = '';
  @Input() hasData: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
