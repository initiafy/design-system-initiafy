import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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
  @Input() displayedColumns: string[];
  @Input() columnDefinitions: DataColumnDefinition<T>[];
  @Input() dataSource: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {}
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
  transformer = 'transformer'
}
