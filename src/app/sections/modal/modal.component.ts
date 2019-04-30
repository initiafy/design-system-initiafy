import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalDocumentationComponent implements OnInit {
  public componentName = 'ModalComponent';
  public module = 'InitiafyModalModule';

  constructor() { }

  ngOnInit() {
  }

}
