import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initiafy-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() overlay: boolean = false;
  @Input() size: 'small' | 'medium' | 'big' | 'bigger' = 'medium';

  @Output() close = new EventEmitter();

  private _classes: string = '';

  get classes() {
    return this._classes;
  }

  constructor() { }

  ngOnInit() {
    this.getOverlayClasses();
  }

  getOverlayClasses() {
    if (this.overlay) {
      this._classes = 'is-overlay';
    } else {
      this._classes = this.size;
    }
  }

}
