import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataColumnDefinition, DataColumnMode, DataTableMenuItem, DataTableSettings } from 'src/app/shared/data-table/data-table.component';
import { SelectionModel } from '@angular/cdk/collections';

interface MockData {
  name: string;
  age: number;
  car: string;
  mandatory: boolean;
}
const MOCK_DATA: MockData[] = [
  {
    name: 'michael',
    age: 19,
    car: 'opal',
    mandatory: true
  },
  {
    name: 'sarah',
    age: 27,
    car: 'audi',
    mandatory: true
  },
  {
    name: 'george',
    age: 21,
    car: 'volkswagon',
    mandatory: false
  },
  {
    name: 'michelle',
    age: 18,
    car: 'range rover',
    mandatory: false
  },
  {
    name: 'philip',
    age: 25,
    car: 'mercedes',
    mandatory: true
  },
  {
    name: 'ruth',
    age: 28,
    car: 'nissan',
    mandatory: false
  },
];

@Component({
  selector: 'app-section-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public exampleDataSource: MatTableDataSource<MockData> = new MatTableDataSource(MOCK_DATA);
  public exampleSelectionModel: SelectionModel<MockData> = new SelectionModel(true /*Multiple*/);
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
      displayedColumns: ['checkbox', 'name', 'age', 'car', 'menu'],
      columnDefinitions: [
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
      ],
      dataSource: this.exampleDataSource,
      menu: this.menu
    });
  }
  public get inputsExampleDataTableSettings(): DataTableSettings<MockData> {
    return ({
      displayedColumns: ['checkbox', 'name', 'extra_checkbox', 'input'],
      columnDefinitions: [
        {
          title: 'Name',
          columnName: 'name'
        },
        {
          title: 'Mandatory',
          columnName: 'extra_checkbox',
          mode: DataColumnMode.checkbox,
          disableFormField: () => false
        },
        {
          title: 'Extra Text',
          columnName: 'input',
          mode: DataColumnMode.input,
          inputChange: () => null,
          disableFormField: () => false
        }
      ],
      dataSource: this.exampleDataSource,
      menu: this.menu
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
