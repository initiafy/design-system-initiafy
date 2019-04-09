import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataColumnDefinition, DataColumnMode, DataTableMenuItem, DataTableSettings } from 'src/app/shared/data-table/data-table.component';
import { SelectionModel } from '@angular/cdk/collections';

interface MockData {
  name: string;
  age: number;
  car: string;
}
const MOCK_DATA: MockData[] = [
  {
    name: 'michael',
    age: 19,
    car: 'opal'
  },
  {
    name: 'sarah',
    age: 27,
    car: 'audi'
  },
  {
    name: 'george',
    age: 21,
    car: 'volkswagon'
  },
  {
    name: 'michelle',
    age: 18,
    car: 'range rover'
  },
  {
    name: 'philip',
    age: 25,
    car: 'mercedes'
  },
  {
    name: 'ruth',
    age: 28,
    car: 'nissan'
  },
];

@Component({
  selector: 'app-section-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public basicExampleDisplayedColumns = ['checkbox', 'name', 'age', 'car', 'menu'];
  public basicExampleDataSource: MatTableDataSource<MockData> = new MatTableDataSource(MOCK_DATA);
  public basicExampleColumnDefinitions: DataColumnDefinition<MockData>[] = [
    {
      title: 'Name',
      columnName: 'name'
    },
    {
      title: 'Age',
      columnName: 'age'
    },
    {
      title: 'Car',
      columnName: 'car'
    }
  ];
  public basicExampleSelectionModel: SelectionModel<MockData> = new SelectionModel(true /*Multiple*/);
  public menu: DataTableMenuItem<MockData>[] = [
    {
      icon: 'visibility',
      label: 'View',
      disabled: (row: MockData) => false,
      action: (row: MockData) => alert(row.name)
    }
  ];
  public get basicExampleDataTableSettings(): DataTableSettings<MockData> {
    return ({
      displayedColumns: this.basicExampleDisplayedColumns,
      columnDefinitions: this.basicExampleColumnDefinitions,
      dataSource: this.basicExampleDataSource,
      menu: this.menu
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
