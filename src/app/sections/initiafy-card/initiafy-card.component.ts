import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiafy-card',
  templateUrl: './initiafy-card.component.html',
  styleUrls: ['./initiafy-card.component.scss']
})
export class InitiafyCardDocumentationComponent implements OnInit {
  public componentName = 'CardComponent';
  public module = 'InitiafyCardModule';

  constructor() { }

  ngOnInit() {
  }

}
