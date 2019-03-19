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
  /** Placeholder text for the Input */
  @Input() placeholder = 'Enter search term';
  /** Color Scheme for the component */
  @Input() color: 'primary' | 'secondary' = 'primary';
  /** Text to display on expand button when component is collapsed */
  @Input() buttontext = 'Search';
  /** Icon to display on button when component is collapsed */
  @Input() buttonicon = 'search';
  /** Event triggered when the search is opened (collapsed = true => collapsed = false) */
  @Output() openSearch = new EventEmitter();
  /** Event triggered when the search is closed (collapsed = false => collapsed = true) */
  @Output() closeSearch = new EventEmitter();
  /** Event triggered when the form is submitted */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  valueValue = 'Search term';
  /** Initial Value for the Input */
  @Input() get value() {
    return this.valueValue;
  }
  @Output() valueChanged = new EventEmitter();
  set value(value) {
    this.valueValue = value;
    this.valueChanged.emit(this.valueValue);
  }
  // Two Way Binding Properties
  collapsedValue = false;
  @Input() get collapsed() {
    return this.collapsedValue;
  }
  @Output() collapsedChange = new EventEmitter();
  set collapsed(value) {
    this.collapsedValue = value;
    this.collapsedChange.emit(this.collapsedValue);
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

  unCollapse() {
    this.collapsed = false;
  }
}
