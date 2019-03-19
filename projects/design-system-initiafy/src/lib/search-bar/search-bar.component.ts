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
  /** Initial Value for the Input */
  @Input() value = 'Search term';
  /** Text to display on expand button when component is collapsed */
  @Input() buttontext = 'Search';
  /** Icon to display on button when component is collapsed */
  @Input() buttonicon = 'search';
  /** Event triggered when the form is submitted */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  // Two Way Binding Properties
  collapsedValue = false;
  /** Whether the component is collapsed */
  @Input() get collapsed() {
    return this.collapsedValue;
  }
  /** Event triggered when the collapsed state of the component is toggled */
  @Output() collapsedChange = new EventEmitter();
  set collapsed(value) {
    this.collapsedValue = value;
    this.collapsedChange.emit(this.collapsedValue);
  }

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.search.emit(this.value);
  }

  unCollapse() {
    this.collapsed = false;
  }
}
