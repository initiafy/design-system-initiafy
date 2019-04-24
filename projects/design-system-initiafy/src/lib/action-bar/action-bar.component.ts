import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'initiafy-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() cssClass = '';
  @Input() isLoading = '';

  constructor() { }

  ngOnInit() {
  }

}
