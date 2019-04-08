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

// see here https://stackblitz.com/edit/angular-material-table-responsive?file=app%2Fapp.component.html

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T> implements OnInit, AfterViewInit {
  // Basic Properties
  @Input() displayedColumns: string[];
  @Input() columnDefinitions: DataColumnDefinition<T>[];
  @Input() dataSource: MatTableDataSource<T>;
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
  // Menu
  @Input() menu: DataTableMenuItem<T>[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren(MatCheckbox) checkboxes: QueryList<MatCheckbox>;
  private itemsShown: T[];
  constructor() { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.itemsShown = this.dataSource.data.slice(0, this.paginator.pageSize);
    this.dataSource.paginator.page.subscribe((pageEvent: PageEvent) => {
      const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
      const endIndex = startIndex + pageEvent.pageSize;
      this.itemsShown = this.dataSource.filteredData.slice(startIndex, endIndex);
    });
  }
  ngOnInit() {
    // Warn for proper usage of checkboxes and selection model
    if (this.displayedColumns.some(e => e === 'checkbox') && !this.selectionModel) {
      console.warn('\
      It is recommended to provide a selection model in checkbox mode\n\
      for example: `this.selectionModel = new SelectionModel(true);`\n\
      `[selectionModel]="selectionModel"`'
      );
      this.selectionModel = new SelectionModel(true);
    }
    // Warn for proper usage of menus
    if (this.displayedColumns.some(e => e === 'menu') && !this.menu) {
      console.warn('You must provide a menu item array for the menu column');
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
    return this.selectionModel.selected.length === Math.min(this.dataSource.data.length, this.paginator.pageSize);
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
      this.itemsShown.forEach(e => {
        if (!this.selectionModel.isSelected(e)) {
          this.selectionModel.select(e);
        }
      });
    }
  }
  public trackByColumnName(column: DataColumnDefinition<T>, index: number): string {
    return column.columnName;
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
}

export enum DataColumnMode {
  // If this column is a number index column
  count = 'count',
  // If Data is nested (use the getNestedValue method)
  nested = 'nested',
  // If DataName does not correspond to desired value use a custom transformer
  transformer = 'transformer',
  // If this is a menu column
  menu = 'menu'
}

export interface DataTableMenuItem<T> {
  icon: string;
  label: string;
  disabled: (row: T) => boolean;
  action: (...args) => void;
}
