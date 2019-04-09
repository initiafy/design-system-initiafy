import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatCheckboxChange, MatCell, MatRow, MatCheckbox, PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface DataTableSettings<T> {
  displayedColumns: string[];
  columnDefinitions: DataColumnDefinition<T>[];
  dataSource: MatTableDataSource<T>;
  menu?: DataTableMenuItem<T>[];
}

// see here https://stackblitz.com/edit/angular-material-table-responsive?file=app%2Fapp.component.html

/**
 * If you want to use a checkbox column on the left hand side and a selection model,
 * then pass in the 'checkbox' string as the first element of the displayedColumns array:
 * `displayedColumns = ['checkbox', ...rest]`
 * You should also provide a selectionModel in this case
 * ---------------------------------
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T> implements OnInit, AfterViewInit {
  // Basic Properties
  @Input() dataTableSettings: DataTableSettings<T>;
  // SelectionModel for use with checkboxes
  _selectionModelValue: SelectionModel<T>;
  @Input()
  get selectionModel(): SelectionModel<T> {
    return this._selectionModelValue;
  }
  @Output() selectionModelChange = new EventEmitter();
  set selectionModel(val: SelectionModel<T>) {
    this._selectionModelValue = val;
    this.selectionModelChange.emit(this._selectionModelValue);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren(MatCheckbox) checkboxes: QueryList<MatCheckbox>;
  private _itemsShown: T[];
  constructor() { }
  ngAfterViewInit() {
    this.dataTableSettings.dataSource.paginator = this.paginator;
    this.dataTableSettings.dataSource.sort = this.sort;
    this._itemsShown = this.dataTableSettings.dataSource.data.slice(0, this.paginator.pageSize);
    this.dataTableSettings.dataSource.paginator.page.subscribe((pageEvent: PageEvent) => {
      const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
      const endIndex = startIndex + pageEvent.pageSize;
      this._itemsShown = this.dataTableSettings.dataSource.filteredData.slice(startIndex, endIndex);
    });
  }
  ngOnInit() {
    // Warn for proper usage of checkboxes and selection model
    if (this.dataTableSettings.displayedColumns.some(e => e === 'checkbox') && !this.selectionModel) {
      console.warn('\
      It is recommended to provide a selection model in checkbox mode\n\
      for example: `this.selectionModel = new SelectionModel(true);`\n\
      `[(selectionModel)]="selectionModel"`'
      );
      this.selectionModel = new SelectionModel(true);
    }
    // Warn for proper usage of menus
    if (this.dataTableSettings.displayedColumns.some(e => e === 'menu') && !this.dataTableSettings.menu) {
      console.warn('You must provide a menu item array for the menu column');
    }
    // Warn for proper use of form field elements
    if ((this.dataTableSettings.columnDefinitions.some(e => {
      return (e.mode === DataColumnMode.checkbox || e.mode === DataColumnMode.input) && !e.disableFormField;
    }))) {
      console.warn('Using form field elements, you should supply a disabling method, e.g. `disableFormField: (row) => false`');
    }
    if (this.dataTableSettings.columnDefinitions.some(e => {
      return e.mode === DataColumnMode.checkbox && !e.checkboxSettings;
    })) {
      console.warn('supply checkbox settings with checkbox column');
    }
    if (this.dataTableSettings.columnDefinitions.some(e => {
      return e.mode === DataColumnMode.input && !e.inputSettings;
    })) {
      console.warn('supply input settings with input column');
    }
  }
  // The following Block is for Checkboxes Behavior
  public checkboxChange(event: MatCheckboxChange, row: T): void {
    const { source, checked } = event;
    if (checked) {
      this.selectionModel.select(row);
    } else {
      this.selectionModel.deselect(row);
    }
  }
  public get isAllSelected(): boolean {
    return this.selectionModel.selected.length === Math.min(this.dataTableSettings.dataSource.data.length, this.paginator.pageSize);
  }
  public get areSomeSelected(): boolean {
    return this.selectionModel.selected.length > 0 && !this.isAllSelected;
  }
  public isItemSelected(row: T): boolean {
    return this.selectionModel.isSelected(row);
  }
  public masterCheckboxChange(event: MatCheckboxChange): void {
    const { source, checked } = event;
    if (this.isAllSelected) {
      this.selectionModel.clear();
    } else {
      this._itemsShown.forEach(e => {
        if (!this.selectionModel.isSelected(e)) {
          this.selectionModel.select(e);
        }
      });
    }
  }
  public trackByColumnName(column: DataColumnDefinition<T>, index: number): string {
    return column.columnName;
  }
  get smallcreen(): boolean {
    return window.innerWidth < 961;
  }
}

export interface DataColumnDefinition<T> {
  // Column Title
  title: string;
  // Corresponds to members of the displayedColumns array. Used to access values from row objects
  columnName: string;
  // If DataName does not correspond to desired value use a custom transformer
  transformer?: (row: T) => string;
  // Use to switch which template is rendered
  mode?: DataColumnMode;
  // Use to disable formfields if present
  disableFormField?: (row: T) => boolean;
  // Used if there is an additional checkbox column
  checkboxSettings?: DataColumnCheckboxSettings<T>;
  // Used if there is an input column
  inputSettings?: DataColumnInputSettings<T>;
  // custom css classes
  customHeaderClassLg?: string;
  customCellClassLg?: string;
  customHeaderClassSm?: string;
  customCellClassSm?: string;
}

export enum DataColumnMode {
  // If this column is a number index column
  count = 'count',
  // If Data is nested (use the getNestedValue method)
  nested = 'nested',
  // If DataName does not correspond to desired value use a custom transformer
  transformer = 'transformer',
  // If this is a menu column
  menu = 'menu',
  // If an additional checkboxes is required in the table
  checkbox = 'extra-checkbox',
  // If this is a column with an input
  input = 'input'
}

export interface DataColumnCheckboxSettings<T> {
  checkboxChange: (event: MatCheckboxChange, row: T) => void;
  checkboxChecked: (row: T) => boolean;
}
export interface DataColumnInputSettings<T> {
  inputChange: (event: KeyboardEvent, row: T) => void;
  inputValue: (row: T) => string;
}

export interface DataTableMenuItem<T> {
  icon: string;
  label: string;
  disabled: (row: T) => boolean;
  action: (...args) => void;
}
