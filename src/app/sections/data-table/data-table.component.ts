import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataColumnDefinition, DataColumnMode } from 'src/app/shared/data-table/data-table.component';
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

  public displayedColumns = ['checkbox', 'name', 'age', 'car'];
  public dataSource: MatTableDataSource<MockData> = new MatTableDataSource(MOCK_DATA);
  public columnDefinitions: DataColumnDefinition<MockData>[] = [
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
  public selectionModel: SelectionModel<MockData> = new SelectionModel(true /*Multiple*/);
  constructor() { }

  ngOnInit() {
  }

}
