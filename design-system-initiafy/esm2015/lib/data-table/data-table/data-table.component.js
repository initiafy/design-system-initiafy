/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatCheckbox } from '@angular/material';
import { DataColumnMode } from '../models/data-column-mode';
// see here https://stackblitz.com/edit/angular-material-table-responsive?file=app%2Fapp.component.html
/**
 * If you want to use a checkbox column on the left hand side and a selection model,
 * then pass in the 'checkbox' string as the first element of the displayedColumns array:
 * `displayedColumns = ['checkbox', ...rest]`
 * You should also provide a selectionModel in this case
 * ---------------------------------
 * @template T
 */
export class InitiafyDataTableComponent {
    constructor() {
        this.selectionModelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selectionModel() {
        return this._selectionModelValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set selectionModel(val) {
        this._selectionModelValue = val;
        this.selectionModelChange.emit(this._selectionModelValue);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.dataTableSettings.dataSource.paginator = this.paginator;
        this.dataTableSettings.dataSource.sort = this.sort;
        this._itemsShown = this.dataTableSettings.dataSource.data.slice(0, this.paginator.pageSize);
        this.dataTableSettings.dataSource.paginator.page.subscribe((/**
         * @param {?} pageEvent
         * @return {?}
         */
        (pageEvent) => {
            /** @type {?} */
            const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
            /** @type {?} */
            const endIndex = startIndex + pageEvent.pageSize;
            this._itemsShown = this.dataTableSettings.dataSource.filteredData.slice(startIndex, endIndex);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Warn for proper usage of checkboxes and selection model
        if (this.dataTableSettings.displayedColumns.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e === 'checkbox')) && !this.selectionModel) {
            console.warn('\
      It is recommended to provide a selection model in checkbox mode\n\
      for example: `this.selectionModel = new SelectionModel(true);`\n\
      `[(selectionModel)]="selectionModel"`');
            this.selectionModel = new SelectionModel(true);
        }
        // Warn for proper usage of menus
        if (this.dataTableSettings.displayedColumns.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e === 'menu')) && !this.dataTableSettings.menu) {
            console.warn('You must provide a menu item array for the menu column');
        }
        // Warn for proper use of form field elements
        if ((this.dataTableSettings.columnDefinitions.some((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            return (e.mode === DataColumnMode.checkbox || e.mode === DataColumnMode.input) && !e.disableFormField;
        })))) {
            console.warn('Using form field elements, you should supply a disabling method, e.g. `disableFormField: (row) => false`');
        }
        if (this.dataTableSettings.columnDefinitions.some((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            return e.mode === DataColumnMode.checkbox && !e.checkboxSettings;
        }))) {
            console.warn('supply checkbox settings with checkbox column');
        }
        if (this.dataTableSettings.columnDefinitions.some((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            return e.mode === DataColumnMode.input && !e.inputSettings;
        }))) {
            console.warn('supply input settings with input column');
        }
    }
    // The following Block is for Checkboxes Behavior
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    checkboxChange(event, row) {
        const { source, checked } = event;
        if (checked) {
            this.selectionModel.select(row);
        }
        else {
            this.selectionModel.deselect(row);
        }
    }
    /**
     * @return {?}
     */
    get isAllSelected() {
        return this.selectionModel.selected.length === Math.min(this.dataTableSettings.dataSource.data.length, this.paginator.pageSize);
    }
    /**
     * @return {?}
     */
    get areSomeSelected() {
        return this.selectionModel.selected.length > 0 && !this.isAllSelected;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    isItemSelected(row) {
        return this.selectionModel.isSelected(row);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    masterCheckboxChange(event) {
        const { source, checked } = event;
        if (this.isAllSelected) {
            this.selectionModel.clear();
        }
        else {
            this._itemsShown.forEach((/**
             * @param {?} e
             * @return {?}
             */
            e => {
                if (!this.selectionModel.isSelected(e)) {
                    this.selectionModel.select(e);
                }
            }));
        }
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    trackByColumnName(column, index) {
        return column.columnName;
    }
    /**
     * @return {?}
     */
    get smallcreen() {
        return window.innerWidth < 961;
    }
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    handleRowClick(event, row) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        const { classList } = target;
        if (classList.contains('mat-checkbox-inner-container')
            || classList.contains('row-action-button')
            || classList.contains('mat-button-wrapper')) {
            return;
        }
        if (!this.dataTableSettings.clickableRows) {
            return;
        }
        this.dataTableSettings.handleRowClick ? this.dataTableSettings.handleRowClick(row) : this.selectionModel.toggle(row);
    }
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    handleCellClick(column, row) {
        if (column.handleCellClick && !(column.mode === DataColumnMode.checkbox)) {
            column.handleCellClick(row);
        }
    }
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    getNestedValue(column, row) {
        /** @type {?} */
        const properties = column.columnName.split('.');
        /** @type {?} */
        let cellContent;
        properties.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            //  Getting the value from the last evaluated parent OR the row itself
            //  allowing nested properties to be correctly evaluated
            cellContent = (cellContent || row)[element];
        }));
        return cellContent;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    isRowSelected(row) {
        return this.selectionModel ? this.selectionModel.isSelected(row) : false;
    }
}
InitiafyDataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-data-table',
                template: "<mat-table [dataSource]=\"dataTableSettings.dataSource\">\n  <ng-container matColumnDef=\"checkbox\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"'customCheckboxColumnClass'\">\n      <mat-checkbox [checked]=\"isAllSelected\" [indeterminate]=\"areSomeSelected\" (change)=\"masterCheckboxChange($event)\">\n      </mat-checkbox>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\" [ngClass]=\"'customCheckboxColumnClass'\">\n      <mat-checkbox [checked]=\"isItemSelected(row)\" class=\"the_checkboxes\" (change)=\"checkboxChange($event, row)\">\n      </mat-checkbox>\n      <initiafy-button class=\"show_in_small_screen align-right-small-screen\" *ngIf=\"dataTableSettings.menu\"\n        [matMenuTriggerFor]=\"appMenu\" (click)=\"clickedItem = row\" icon=\"more_vert\" [disabled]=\"!dataTableSettings.menu\">\n      </initiafy-button>\n    </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"menu\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"'customMenuColumnClass flex justify-content-center'\">\n    </mat-header-cell>\n    <mat-cell class=\"hide_in_small_screen\" *matCellDef=\"let row\"\n      [ngClass]=\"'customMenuColumnClass flex justify-content-center'\">\n      <initiafy-button [matMenuTriggerFor]=\"appMenu\" (click)=\"clickedItem = row\" [cssClass]=\"'row-action-button'\"\n        icon=\"more_vert\" [disabled]=\"!dataTableSettings.menu\">\n      </initiafy-button>\n    </mat-cell>\n  </ng-container>\n  <ng-container *ngFor=\"let column of dataTableSettings.columnDefinitions; trackBy: trackByColumnName\"\n    [matColumnDef]=\"column.columnName\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header\n      [class.customExtraCheckboxColumnClass]=\"column.mode === 'extra-checkbox'\"\n      [ngClass]=\"smallcreen ? column.customHeaderClassSm : column.customHeaderClassLg\">\n      {{ column.title }}\n    </mat-header-cell>\n    <ng-container [ngSwitch]=\"column.mode\">\n      <ng-container *ngSwitchCase=\"'nested'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\" [attr.data-label]=\"column.title\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ getNestedValue(column, row) }}\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'count'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\" [attr.data-label]=\"column.title\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ row.cnt }}\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'transformer'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\" [attr.data-label]=\"column.title\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ column.transformer(row) }}\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'extra-checkbox'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen customExtraCheckboxColumnClass\"\n          [attr.data-label]=\"column.title\" [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          <mat-checkbox [disabled]=\"column.disableFormField(row)\"\n            [checked]=\"column.checkboxSettings.checkboxChecked(row)\"\n            (change)=\"column.checkboxSettings.checkboxChange($event, row)\" class=\"margin-x-auto\"></mat-checkbox>\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'list'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\"\n          [attr.data-label]=\"column.title\" [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          [class.pointer]=\"column.handleCellClick\">\n          <ul>\n            <li *ngFor=\"let item of column.listAccessor(row)\">{{item}}</li>\n          </ul>\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'input'\">\n        <mat-cell *matCellDef=\"let row\" [attr.data-label]=\"column.title\" class=\"block_small_screen input-cell\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          <mat-form-field class=\"column-input-form-field\" floatLabel=\"always\">\n            <input [disabled]=\"column.disableFormField(row)\" [placeholder]=\"smallcreen ? column.title : ''\" matInput\n              (keyup)=\"column.inputSettings.inputChange($event, row)\" [value]=\"column.inputSettings.inputValue(row)\" />\n          </mat-form-field>\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\" [attr.data-label]=\"column.title\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ row[column.columnName] }}\n        </mat-cell>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"dataTableSettings.displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: dataTableSettings.displayedColumns\"\n    [class.hover-bgcolor]=\"!dataTableSettings.hideSelectedRowHighlighting && isRowSelected(row)\"\n    [class.pointer]=\"!!dataTableSettings.clickableRows\" (click)=\"handleRowClick($event, row)\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\n<mat-menu #appMenu=\"matMenu\">\n  <div *ngIf=\"dataTableSettings.menu\">\n    <ng-container *ngFor=\"let item of dataTableSettings.menu\">\n      <button mat-menu-item (click)=\"item.action(clickedItem)\" [disabled]=\"item.disabled && item.disabled(clickedItem)\">\n        <mat-icon>{{ item.icon }}</mat-icon>\n        {{ item.label }}\n      </button>\n    </ng-container>\n  </div>\n</mat-menu>",
                styles: [".customCheckboxColumnClass{flex:0 1 58px}.customExtraCheckboxColumnClass,.customMenuColumnClass{flex:0 1 80px;justify-content:center}.show_in_small_screen{display:none}.column-input-form-field{width:100%}@media screen and (max-width:960px){.block_small_screen{display:block}.the_checkboxes{margin-bottom:8px;margin-left:8px}.mat-table{border:0;vertical-align:middle}.align-right-small-screen{margin-left:auto}.mat-table caption{font-size:1em}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:0}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:0}mat-footer-row::after,mat-header-row::after,mat-row::after{min-height:auto}.mat-table .mat-header-cell{border:10px solid;clip:rect(0 0 0 0);height:1px;margin:-1px;padding:0;position:absolute;width:1px}.mat-header-row{display:none}.mat-table .mat-row{border-bottom:5px solid #ddd;display:block}.mat-table .mat-cell{border-bottom:1px solid #ddd;font-size:1em;text-align:right;height:30px;margin-bottom:4%;padding-left:8px;padding-right:8px}.mat-table .mat-cell:not(.input-cell):before{content:attr(data-label);float:left;color:rgba(0,0,0,.54);font-weight:400;font-size:12px}.mat-table .mat-cell:last-child{border-bottom:0}.mat-table .mat-cell:first-child{margin-top:4%}.hide_in_small_screen{display:none}.show_in_small_screen{display:block}}ul{list-style:none;padding-left:0}"]
            }] }
];
/** @nocollapse */
InitiafyDataTableComponent.ctorParameters = () => [];
InitiafyDataTableComponent.propDecorators = {
    dataTableSettings: [{ type: Input }],
    selectionModel: [{ type: Input }],
    selectionModelChange: [{ type: Output }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    checkboxes: [{ type: ViewChildren, args: [MatCheckbox,] }]
};
if (false) {
    /** @type {?} */
    InitiafyDataTableComponent.prototype.clickedItem;
    /** @type {?} */
    InitiafyDataTableComponent.prototype.dataTableSettings;
    /** @type {?} */
    InitiafyDataTableComponent.prototype._selectionModelValue;
    /** @type {?} */
    InitiafyDataTableComponent.prototype.selectionModelChange;
    /** @type {?} */
    InitiafyDataTableComponent.prototype.paginator;
    /** @type {?} */
    InitiafyDataTableComponent.prototype.sort;
    /** @type {?} */
    InitiafyDataTableComponent.prototype.checkboxes;
    /**
     * @type {?}
     * @private
     */
    InitiafyDataTableComponent.prototype._itemsShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2RhdGEtdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBZ0MsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7QUFpQjVELE1BQU0sT0FBTywwQkFBMEI7SUFvQnJDO1FBVlUseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVVwQyxDQUFDOzs7O0lBZGpCLElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELElBQUksY0FBYyxDQUFDLEdBQXNCO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBT0QsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFH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LElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELGFBQWEsQ0FBQyxHQUFNO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMzRSxDQUFDOzs7WUF2SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDAwTUFBMEM7O2FBRTNDOzs7OztnQ0FJRSxLQUFLOzZCQUdMLEtBQUs7bUNBSUwsTUFBTTt3QkFNTixTQUFTLFNBQUMsWUFBWTttQkFDdEIsU0FBUyxTQUFDLE9BQU87eUJBQ2pCLFlBQVksU0FBQyxXQUFXOzs7O0lBakJ6QixpREFBc0I7O0lBRXRCLHVEQUFpRDs7SUFFakQsMERBQXdDOztJQUt4QywwREFBb0Q7O0lBTXBELCtDQUFpRDs7SUFDakQsMENBQWtDOztJQUNsQyxnREFBOEQ7Ozs7O0lBQzlELGlEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUYWJsZVNldHRpbmdzIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtY29sdW1uLXNldHRpbmdzJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0U29ydCwgTWF0Q2hlY2tib3gsIFBhZ2VFdmVudCwgTWF0Q2hlY2tib3hDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEYXRhQ29sdW1uTW9kZSB9IGZyb20gJy4uL21vZGVscy9kYXRhLWNvbHVtbi1tb2RlJztcbmltcG9ydCB7IERhdGFDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtY29sdW1uLWRlZmluaXRpb24nO1xuXG4vLyBzZWUgaGVyZSBodHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvYW5ndWxhci1tYXRlcmlhbC10YWJsZS1yZXNwb25zaXZlP2ZpbGU9YXBwJTJGYXBwLmNvbXBvbmVudC5odG1sXG5cbi8qKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIGEgY2hlY2tib3ggY29sdW1uIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZSBhbmQgYSBzZWxlY3Rpb24gbW9kZWwsXG4gKiB0aGVuIHBhc3MgaW4gdGhlICdjaGVja2JveCcgc3RyaW5nIGFzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkaXNwbGF5ZWRDb2x1bW5zIGFycmF5OlxuICogYGRpc3BsYXllZENvbHVtbnMgPSBbJ2NoZWNrYm94JywgLi4ucmVzdF1gXG4gKiBZb3Ugc2hvdWxkIGFsc28gcHJvdmlkZSBhIHNlbGVjdGlvbk1vZGVsIGluIHRoaXMgY2FzZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbml0aWFmeURhdGFUYWJsZUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBjbGlja2VkSXRlbTogVDtcbiAgLy8gQmFzaWMgUHJvcGVydGllc1xuICBASW5wdXQoKSBkYXRhVGFibGVTZXR0aW5nczogRGF0YVRhYmxlU2V0dGluZ3M8VD47XG4gIC8vIFNlbGVjdGlvbk1vZGVsIGZvciB1c2Ugd2l0aCBjaGVja2JveGVzXG4gIF9zZWxlY3Rpb25Nb2RlbFZhbHVlOiBTZWxlY3Rpb25Nb2RlbDxUPjtcbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGlvbk1vZGVsKCk6IFNlbGVjdGlvbk1vZGVsPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTW9kZWxWYWx1ZTtcbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0aW9uTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNldCBzZWxlY3Rpb25Nb2RlbCh2YWw6IFNlbGVjdGlvbk1vZGVsPFQ+KSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWxWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGVsQ2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0aW9uTW9kZWxWYWx1ZSk7XG4gIH1cblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZHJlbihNYXRDaGVja2JveCkgY2hlY2tib3hlczogUXVlcnlMaXN0PE1hdENoZWNrYm94PjtcbiAgcHJpdmF0ZSBfaXRlbXNTaG93bjogVFtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVRhYmxlU2V0dGluZ3MuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIHRoaXMuX2l0ZW1zU2hvd24gPSB0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmRhdGFTb3VyY2UuZGF0YS5zbGljZSgwLCB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSk7XG4gICAgdGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kYXRhU291cmNlLnBhZ2luYXRvci5wYWdlLnN1YnNjcmliZSgocGFnZUV2ZW50OiBQYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlRXZlbnQucGFnZUluZGV4ICogcGFnZUV2ZW50LnBhZ2VTaXplO1xuICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgcGFnZUV2ZW50LnBhZ2VTaXplO1xuICAgICAgdGhpcy5faXRlbXNTaG93biA9IHRoaXMuZGF0YVRhYmxlU2V0dGluZ3MuZGF0YVNvdXJjZS5maWx0ZXJlZERhdGEuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIH0pO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFdhcm4gZm9yIHByb3BlciB1c2FnZSBvZiBjaGVja2JveGVzIGFuZCBzZWxlY3Rpb24gbW9kZWxcbiAgICBpZiAodGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kaXNwbGF5ZWRDb2x1bW5zLnNvbWUoZSA9PiBlID09PSAnY2hlY2tib3gnKSAmJiAhdGhpcy5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgY29uc29sZS53YXJuKCdcXFxuICAgICAgSXQgaXMgcmVjb21tZW5kZWQgdG8gcHJvdmlkZSBhIHNlbGVjdGlvbiBtb2RlbCBpbiBjaGVja2JveCBtb2RlXFxuXFxcbiAgICAgIGZvciBleGFtcGxlOiBgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlKTtgXFxuXFxcbiAgICAgIGBbKHNlbGVjdGlvbk1vZGVsKV09XCJzZWxlY3Rpb25Nb2RlbFwiYCdcbiAgICAgICk7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUpO1xuICAgIH1cbiAgICAvLyBXYXJuIGZvciBwcm9wZXIgdXNhZ2Ugb2YgbWVudXNcbiAgICBpZiAodGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kaXNwbGF5ZWRDb2x1bW5zLnNvbWUoZSA9PiBlID09PSAnbWVudScpICYmICF0aGlzLmRhdGFUYWJsZVNldHRpbmdzLm1lbnUpIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IG11c3QgcHJvdmlkZSBhIG1lbnUgaXRlbSBhcnJheSBmb3IgdGhlIG1lbnUgY29sdW1uJyk7XG4gICAgfVxuICAgIC8vIFdhcm4gZm9yIHByb3BlciB1c2Ugb2YgZm9ybSBmaWVsZCBlbGVtZW50c1xuICAgIGlmICgodGhpcy5kYXRhVGFibGVTZXR0aW5ncy5jb2x1bW5EZWZpbml0aW9ucy5zb21lKGUgPT4ge1xuICAgICAgcmV0dXJuIChlLm1vZGUgPT09IERhdGFDb2x1bW5Nb2RlLmNoZWNrYm94IHx8IGUubW9kZSA9PT0gRGF0YUNvbHVtbk1vZGUuaW5wdXQpICYmICFlLmRpc2FibGVGb3JtRmllbGQ7XG4gICAgfSkpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1VzaW5nIGZvcm0gZmllbGQgZWxlbWVudHMsIHlvdSBzaG91bGQgc3VwcGx5IGEgZGlzYWJsaW5nIG1ldGhvZCwgZS5nLiBgZGlzYWJsZUZvcm1GaWVsZDogKHJvdykgPT4gZmFsc2VgJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmNvbHVtbkRlZmluaXRpb25zLnNvbWUoZSA9PiB7XG4gICAgICByZXR1cm4gZS5tb2RlID09PSBEYXRhQ29sdW1uTW9kZS5jaGVja2JveCAmJiAhZS5jaGVja2JveFNldHRpbmdzO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3N1cHBseSBjaGVja2JveCBzZXR0aW5ncyB3aXRoIGNoZWNrYm94IGNvbHVtbicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhVGFibGVTZXR0aW5ncy5jb2x1bW5EZWZpbml0aW9ucy5zb21lKGUgPT4ge1xuICAgICAgcmV0dXJuIGUubW9kZSA9PT0gRGF0YUNvbHVtbk1vZGUuaW5wdXQgJiYgIWUuaW5wdXRTZXR0aW5ncztcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKCdzdXBwbHkgaW5wdXQgc2V0dGluZ3Mgd2l0aCBpbnB1dCBjb2x1bW4nKTtcbiAgICB9XG4gIH1cbiAgLy8gVGhlIGZvbGxvd2luZyBCbG9jayBpcyBmb3IgQ2hlY2tib3hlcyBCZWhhdmlvclxuICBwdWJsaWMgY2hlY2tib3hDaGFuZ2UoZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlLCByb3c6IFQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgY2hlY2tlZCB9ID0gZXZlbnQ7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuZGVzZWxlY3Qocm93KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLmxlbmd0aCA9PT0gTWF0aC5taW4odGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSk7XG4gIH1cbiAgcHVibGljIGdldCBhcmVTb21lU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAhdGhpcy5pc0FsbFNlbGVjdGVkO1xuICB9XG4gIHB1YmxpYyBpc0l0ZW1TZWxlY3RlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKHJvdyk7XG4gIH1cbiAgcHVibGljIG1hc3RlckNoZWNrYm94Q2hhbmdlKGV2ZW50OiBNYXRDaGVja2JveENoYW5nZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCBjaGVja2VkIH0gPSBldmVudDtcbiAgICBpZiAodGhpcy5pc0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zU2hvd24uZm9yRWFjaChlID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQoZSkpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyB0cmFja0J5Q29sdW1uTmFtZShjb2x1bW46IERhdGFDb2x1bW5EZWZpbml0aW9uPFQ+LCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29sdW1uLmNvbHVtbk5hbWU7XG4gIH1cbiAgZ2V0IHNtYWxsY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgOTYxO1xuICB9XG4gIHB1YmxpYyBoYW5kbGVSb3dDbGljayhldmVudDogRXZlbnQsIHJvdzogVCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gdGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIGNsYXNzTGlzdC5jb250YWlucygnbWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lcicpXG4gICAgICB8fCBjbGFzc0xpc3QuY29udGFpbnMoJ3Jvdy1hY3Rpb24tYnV0dG9uJylcbiAgICAgIHx8IGNsYXNzTGlzdC5jb250YWlucygnbWF0LWJ1dHRvbi13cmFwcGVyJylcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmNsaWNrYWJsZVJvd3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRhVGFibGVTZXR0aW5ncy5oYW5kbGVSb3dDbGljayA/IHRoaXMuZGF0YVRhYmxlU2V0dGluZ3MuaGFuZGxlUm93Q2xpY2socm93KSA6IHRoaXMuc2VsZWN0aW9uTW9kZWwudG9nZ2xlKHJvdyk7XG4gIH1cbiAgcHVibGljIGhhbmRsZUNlbGxDbGljayhjb2x1bW46IERhdGFDb2x1bW5EZWZpbml0aW9uPFQ+LCByb3c6IFQpOiB2b2lkIHtcbiAgICBpZiAoY29sdW1uLmhhbmRsZUNlbGxDbGljayAmJiAhKGNvbHVtbi5tb2RlID09PSBEYXRhQ29sdW1uTW9kZS5jaGVja2JveCkpIHtcbiAgICAgIGNvbHVtbi5oYW5kbGVDZWxsQ2xpY2socm93KTtcbiAgICB9XG4gIH1cbiAgZ2V0TmVzdGVkVmFsdWUoY29sdW1uOiBEYXRhQ29sdW1uRGVmaW5pdGlvbjxUPiwgcm93OiBUKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGNvbHVtbi5jb2x1bW5OYW1lLnNwbGl0KCcuJyk7XG4gICAgbGV0IGNlbGxDb250ZW50OiBhbnk7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgLy8gIEdldHRpbmcgdGhlIHZhbHVlIGZyb20gdGhlIGxhc3QgZXZhbHVhdGVkIHBhcmVudCBPUiB0aGUgcm93IGl0c2VsZlxuICAgICAgLy8gIGFsbG93aW5nIG5lc3RlZCBwcm9wZXJ0aWVzIHRvIGJlIGNvcnJlY3RseSBldmFsdWF0ZWRcbiAgICAgIGNlbGxDb250ZW50ID0gKGNlbGxDb250ZW50IHx8IHJvdylbZWxlbWVudF07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNlbGxDb250ZW50O1xuICB9XG4gIGlzUm93U2VsZWN0ZWQocm93OiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwgPyB0aGlzLnNlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQocm93KSA6IGZhbHNlO1xuICB9XG59XG4iXX0=