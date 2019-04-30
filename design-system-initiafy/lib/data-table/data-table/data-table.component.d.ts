import { OnInit, AfterViewInit, EventEmitter, QueryList } from '@angular/core';
import { DataTableSettings } from '../models/data-column-settings';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatCheckbox, MatCheckboxChange } from '@angular/material';
import { DataColumnDefinition } from '../models/data-column-definition';
/**
 * If you want to use a checkbox column on the left hand side and a selection model,
 * then pass in the 'checkbox' string as the first element of the displayedColumns array:
 * `displayedColumns = ['checkbox', ...rest]`
 * You should also provide a selectionModel in this case
 * ---------------------------------
 */
export declare class InitiafyDataTableComponent<T> implements OnInit, AfterViewInit {
    clickedItem: T;
    dataTableSettings: DataTableSettings<T>;
    _selectionModelValue: SelectionModel<T>;
    selectionModel: SelectionModel<T>;
    selectionModelChange: EventEmitter<{}>;
    paginator: MatPaginator;
    sort: MatSort;
    checkboxes: QueryList<MatCheckbox>;
    private _itemsShown;
    constructor();
    ngAfterViewInit(): void;
    ngOnInit(): void;
    checkboxChange(event: MatCheckboxChange, row: T): void;
    readonly isAllSelected: boolean;
    readonly areSomeSelected: boolean;
    isItemSelected(row: T): boolean;
    masterCheckboxChange(event: MatCheckboxChange): void;
    trackByColumnName(column: DataColumnDefinition<T>, index: number): string;
    readonly smallcreen: boolean;
    handleRowClick(event: Event, row: T): void;
    handleCellClick(column: DataColumnDefinition<T>, row: T): void;
    getNestedValue(column: DataColumnDefinition<T>, row: T): any;
    isRowSelected(row: T): boolean;
}
