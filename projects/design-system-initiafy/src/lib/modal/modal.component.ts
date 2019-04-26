import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() overlay = false;
  @Input() hideCloseButton = false;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
