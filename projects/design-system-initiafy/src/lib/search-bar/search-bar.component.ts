import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface SearchItem {
  title: string;
  dataName: string;
}

@Component({
  selector: 'initiafy-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder = '';
  @Input() collapsible: boolean;
  @Input() collapsed: boolean;
  @Input() wrappable: boolean;
  @Input() searchItem: SearchItem;
  @Input() color: string;
  @Input() icon: string;
  @Input() buttontext: string;

  @Output() openSearch = new EventEmitter();
  @Output() closeSearch = new EventEmitter();
  @Output() search = new EventEmitter();

  formControl = new FormControl('');
  value = 'Clear me';

  // Two Way Binding Properties
  searchParametersValue: [];
  @Input()
  get searchParameters() {
    return this.searchParametersValue;
  }
  @Output() searchParametersChange = new EventEmitter();
  set searchParameters(value) {
    this.searchParametersValue = value;
    this.searchParametersChange.emit(this.searchParametersValue);
  }

  constructor() {}

  ngOnInit() {}

  onBlurMethod() {
    return;
  }

  resetForm() {
    return;
  }

  triggerSearch(e) {
    return;
  }
}
