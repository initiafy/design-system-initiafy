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
var InitiafyDataTableComponent = /** @class */ (function () {
    function InitiafyDataTableComponent() {
        this.selectionModelChange = new EventEmitter();
    }
    Object.defineProperty(InitiafyDataTableComponent.prototype, "selectionModel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectionModelValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._selectionModelValue = val;
            this.selectionModelChange.emit(this._selectionModelValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataTableSettings.dataSource.paginator = this.paginator;
        this.dataTableSettings.dataSource.sort = this.sort;
        this._itemsShown = this.dataTableSettings.dataSource.data.slice(0, this.paginator.pageSize);
        this.dataTableSettings.dataSource.paginator.page.subscribe((/**
         * @param {?} pageEvent
         * @return {?}
         */
        function (pageEvent) {
            /** @type {?} */
            var startIndex = pageEvent.pageIndex * pageEvent.pageSize;
            /** @type {?} */
            var endIndex = startIndex + pageEvent.pageSize;
            _this._itemsShown = _this.dataTableSettings.dataSource.filteredData.slice(startIndex, endIndex);
        }));
    };
    /**
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Warn for proper usage of checkboxes and selection model
        if (this.dataTableSettings.displayedColumns.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e === 'checkbox'; })) && !this.selectionModel) {
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
        function (e) { return e === 'menu'; })) && !this.dataTableSettings.menu) {
            console.warn('You must provide a menu item array for the menu column');
        }
        // Warn for proper use of form field elements
        if ((this.dataTableSettings.columnDefinitions.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return (e.mode === DataColumnMode.checkbox || e.mode === DataColumnMode.input) && !e.disableFormField;
        })))) {
            console.warn('Using form field elements, you should supply a disabling method, e.g. `disableFormField: (row) => false`');
        }
        if (this.dataTableSettings.columnDefinitions.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.mode === DataColumnMode.checkbox && !e.checkboxSettings;
        }))) {
            console.warn('supply checkbox settings with checkbox column');
        }
        if (this.dataTableSettings.columnDefinitions.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.mode === DataColumnMode.input && !e.inputSettings;
        }))) {
            console.warn('supply input settings with input column');
        }
    };
    // The following Block is for Checkboxes Behavior
    // The following Block is for Checkboxes Behavior
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.checkboxChange = 
    // The following Block is for Checkboxes Behavior
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    function (event, row) {
        var source = event.source, checked = event.checked;
        if (checked) {
            this.selectionModel.select(row);
        }
        else {
            this.selectionModel.deselect(row);
        }
    };
    Object.defineProperty(InitiafyDataTableComponent.prototype, "isAllSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectionModel.selected.length === Math.min(this.dataTableSettings.dataSource.data.length, this.paginator.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitiafyDataTableComponent.prototype, "areSomeSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectionModel.selected.length > 0 && !this.isAllSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} row
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.isItemSelected = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return this.selectionModel.isSelected(row);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.masterCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        var source = event.source, checked = event.checked;
        if (this.isAllSelected) {
            this.selectionModel.clear();
        }
        else {
            this._itemsShown.forEach((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (!_this.selectionModel.isSelected(e)) {
                    _this.selectionModel.select(e);
                }
            }));
        }
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.trackByColumnName = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        return column.columnName;
    };
    Object.defineProperty(InitiafyDataTableComponent.prototype, "smallcreen", {
        get: /**
         * @return {?}
         */
        function () {
            return window.innerWidth < 961;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.handleRowClick = /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    function (event, row) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        var classList = target.classList;
        if (classList.contains('mat-checkbox-inner-container')
            || classList.contains('row-action-button')
            || classList.contains('mat-button-wrapper')) {
            return;
        }
        if (!this.dataTableSettings.clickableRows) {
            return;
        }
        this.dataTableSettings.handleRowClick ? this.dataTableSettings.handleRowClick(row) : this.selectionModel.toggle(row);
    };
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.handleCellClick = /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    function (column, row) {
        if (column.handleCellClick && !(column.mode === DataColumnMode.checkbox)) {
            column.handleCellClick(row);
        }
    };
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.getNestedValue = /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    function (column, row) {
        /** @type {?} */
        var properties = column.columnName.split('.');
        /** @type {?} */
        var cellContent;
        properties.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            //  Getting the value from the last evaluated parent OR the row itself
            //  allowing nested properties to be correctly evaluated
            cellContent = (cellContent || row)[element];
        }));
        return cellContent;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    InitiafyDataTableComponent.prototype.isRowSelected = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return this.selectionModel ? this.selectionModel.isSelected(row) : false;
    };
    InitiafyDataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-data-table',
                    template: "<mat-table [dataSource]=\"dataTableSettings.dataSource\">\n  <ng-container matColumnDef=\"checkbox\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"'customCheckboxColumnClass'\">\n      <mat-checkbox [checked]=\"isAllSelected\" [indeterminate]=\"areSomeSelected\" (change)=\"masterCheckboxChange($event)\">\n      </mat-checkbox>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\" [ngClass]=\"'customCheckboxColumnClass'\">\n      <mat-checkbox [checked]=\"isItemSelected(row)\" class=\"the_checkboxes\" (change)=\"checkboxChange($event, row)\">\n      </mat-checkbox>\n      <initiafy-button class=\"show_in_small_screen align-right-small-screen\" *ngIf=\"dataTableSettings.menu\"\n        [matMenuTriggerFor]=\"appMenu\" (click)=\"clickedItem = row\" icon=\"more_vert\" [disabled]=\"!dataTableSettings.menu\">\n      </initiafy-button>\n    </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"menu\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header [ngClass]=\"'customMenuColumnClass flex justify-content-center'\">\n    </mat-header-cell>\n    <mat-cell class=\"hide_in_small_screen\" *matCellDef=\"let row\"\n      [ngClass]=\"'customMenuColumnClass flex justify-content-center'\">\n      <initiafy-button [matMenuTriggerFor]=\"appMenu\" (click)=\"clickedItem = row\" [cssClass]=\"'row-action-button'\"\n        icon=\"more_vert\" [disabled]=\"!dataTableSettings.menu\">\n      </initiafy-button>\n    </mat-cell>\n  </ng-container>\n  <ng-container *ngFor=\"let column of dataTableSettings.columnDefinitions; trackBy: trackByColumnName\"\n    [matColumnDef]=\"column.columnName\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header\n      [class.customExtraCheckboxColumnClass]=\"column.mode === 'extra-checkbox'\"\n      [ngClass]=\"smallcreen ? column.customHeaderClassSm : column.customHeaderClassLg\">\n      {{ column.title }}\n    </mat-header-cell>\n    <ng-container [ngSwitch]=\"column.mode\">\n      <ng-container *ngSwitchCase=\"'nested'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\" [attr.data-label]=\"column.title\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ getNestedValue(column, row) }}\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'count'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\" [attr.data-label]=\"column.title\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ row.cnt }}\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'transformer'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\" [attr.data-label]=\"column.title\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ column.transformer(row) }}\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'extra-checkbox'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen customExtraCheckboxColumnClass\"\n          [attr.data-label]=\"column.title\" [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          <mat-checkbox [disabled]=\"column.disableFormField(row)\"\n            [checked]=\"column.checkboxSettings.checkboxChecked(row)\"\n            (change)=\"column.checkboxSettings.checkboxChange($event, row)\" class=\"margin-x-auto\"></mat-checkbox>\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'list'\">\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\"\n          [attr.data-label]=\"column.title\" [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          [class.pointer]=\"column.handleCellClick\">\n          <ul>\n            <li *ngFor=\"let item of column.listAccessor(row)\">{{item}}</li>\n          </ul>\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'input'\">\n        <mat-cell *matCellDef=\"let row\" [attr.data-label]=\"column.title\" class=\"block_small_screen input-cell\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          <mat-form-field class=\"column-input-form-field\" floatLabel=\"always\">\n            <input [disabled]=\"column.disableFormField(row)\" [placeholder]=\"smallcreen ? column.title : ''\" matInput\n              (keyup)=\"column.inputSettings.inputChange($event, row)\" [value]=\"column.inputSettings.inputValue(row)\" />\n          </mat-form-field>\n        </mat-cell>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <mat-cell *matCellDef=\"let row\" class=\"block_small_screen\"\n          [ngClass]=\"smallcreen ? column.customCellClassSm : column.customCellClassLg\" [attr.data-label]=\"column.title\"\n          (click)=\"handleCellClick(column, row)\" [class.pointer]=\"column.handleCellClick\">\n          {{ row[column.columnName] }}\n        </mat-cell>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"dataTableSettings.displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: dataTableSettings.displayedColumns\"\n    [class.hover-bgcolor]=\"!dataTableSettings.hideSelectedRowHighlighting && isRowSelected(row)\"\n    [class.pointer]=\"!!dataTableSettings.clickableRows\" (click)=\"handleRowClick($event, row)\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\n<mat-menu #appMenu=\"matMenu\">\n  <div *ngIf=\"dataTableSettings.menu\">\n    <ng-container *ngFor=\"let item of dataTableSettings.menu\">\n      <button mat-menu-item (click)=\"item.action(clickedItem)\" [disabled]=\"item.disabled && item.disabled(clickedItem)\">\n        <mat-icon>{{ item.icon }}</mat-icon>\n        {{ item.label }}\n      </button>\n    </ng-container>\n  </div>\n</mat-menu>",
                    styles: [".customCheckboxColumnClass{flex:0 1 58px}.customExtraCheckboxColumnClass,.customMenuColumnClass{flex:0 1 80px;justify-content:center}.show_in_small_screen{display:none}.column-input-form-field{width:100%}@media screen and (max-width:960px){.block_small_screen{display:block}.the_checkboxes{margin-bottom:8px;margin-left:8px}.mat-table{border:0;vertical-align:middle}.align-right-small-screen{margin-left:auto}.mat-table caption{font-size:1em}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:0}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:0}mat-footer-row::after,mat-header-row::after,mat-row::after{min-height:auto}.mat-table .mat-header-cell{border:10px solid;clip:rect(0 0 0 0);height:1px;margin:-1px;padding:0;position:absolute;width:1px}.mat-header-row{display:none}.mat-table .mat-row{border-bottom:5px solid #ddd;display:block}.mat-table .mat-cell{border-bottom:1px solid #ddd;font-size:1em;text-align:right;height:30px;margin-bottom:4%;padding-left:8px;padding-right:8px}.mat-table .mat-cell:not(.input-cell):before{content:attr(data-label);float:left;color:rgba(0,0,0,.54);font-weight:400;font-size:12px}.mat-table .mat-cell:last-child{border-bottom:0}.mat-table .mat-cell:first-child{margin-top:4%}.hide_in_small_screen{display:none}.show_in_small_screen{display:block}}ul{list-style:none;padding-left:0}"]
                }] }
    ];
    /** @nocollapse */
    InitiafyDataTableComponent.ctorParameters = function () { return []; };
    InitiafyDataTableComponent.propDecorators = {
        dataTableSettings: [{ type: Input }],
        selectionModel: [{ type: Input }],
        selectionModelChange: [{ type: Output }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }],
        checkboxes: [{ type: ViewChildren, args: [MatCheckbox,] }]
    };
    return InitiafyDataTableComponent;
}());
export { InitiafyDataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2RhdGEtdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBZ0MsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7QUFZNUQ7SUF5QkU7UUFWVSx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBVXBDLENBQUM7SUFkakIsc0JBQ0ksc0RBQWM7Ozs7UUFEbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNuQyxDQUFDOzs7OztRQUVELFVBQW1CLEdBQXNCO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7WUFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1RCxDQUFDOzs7T0FMQTs7OztJQVlELG9EQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFX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QUM7O1lBQzNDLFdBQWdCO1FBQ3BCLFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3hCLHNFQUFzRTtZQUN0RSx3REFBd0Q7WUFDeEQsV0FBVyxHQUFHLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxrREFBYTs7OztJQUFiLFVBQWMsR0FBTTtRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0UsQ0FBQzs7Z0JBdklGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwwME1BQTBDOztpQkFFM0M7Ozs7O29DQUlFLEtBQUs7aUNBR0wsS0FBSzt1Q0FJTCxNQUFNOzRCQU1OLFNBQVMsU0FBQyxZQUFZO3VCQUN0QixTQUFTLFNBQUMsT0FBTzs2QkFDakIsWUFBWSxTQUFDLFdBQVc7O0lBaUgzQixpQ0FBQztDQUFBLEFBeElELElBd0lDO1NBbklZLDBCQUEwQjs7O0lBQ3JDLGlEQUFzQjs7SUFFdEIsdURBQWlEOztJQUVqRCwwREFBd0M7O0lBS3hDLDBEQUFvRDs7SUFNcEQsK0NBQWlEOztJQUNqRCwwQ0FBa0M7O0lBQ2xDLGdEQUE4RDs7Ozs7SUFDOUQsaURBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU2V0dGluZ3MgfSBmcm9tICcuLi9tb2RlbHMvZGF0YS1jb2x1bW4tc2V0dGluZ3MnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0LCBNYXRDaGVja2JveCwgUGFnZUV2ZW50LCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERhdGFDb2x1bW5Nb2RlIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGEtY29sdW1uLW1vZGUnO1xuaW1wb3J0IHsgRGF0YUNvbHVtbkRlZmluaXRpb24gfSBmcm9tICcuLi9tb2RlbHMvZGF0YS1jb2x1bW4tZGVmaW5pdGlvbic7XG5cbi8vIHNlZSBoZXJlIGh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9hbmd1bGFyLW1hdGVyaWFsLXRhYmxlLXJlc3BvbnNpdmU/ZmlsZT1hcHAlMkZhcHAuY29tcG9uZW50Lmh0bWxcblxuLyoqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgYSBjaGVja2JveCBjb2x1bW4gb24gdGhlIGxlZnQgaGFuZCBzaWRlIGFuZCBhIHNlbGVjdGlvbiBtb2RlbCxcbiAqIHRoZW4gcGFzcyBpbiB0aGUgJ2NoZWNrYm94JyBzdHJpbmcgYXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGRpc3BsYXllZENvbHVtbnMgYXJyYXk6XG4gKiBgZGlzcGxheWVkQ29sdW1ucyA9IFsnY2hlY2tib3gnLCAuLi5yZXN0XWBcbiAqIFlvdSBzaG91bGQgYWxzbyBwcm92aWRlIGEgc2VsZWN0aW9uTW9kZWwgaW4gdGhpcyBjYXNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5pdGlhZnktZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEluaXRpYWZ5RGF0YVRhYmxlQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGNsaWNrZWRJdGVtOiBUO1xuICAvLyBCYXNpYyBQcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIGRhdGFUYWJsZVNldHRpbmdzOiBEYXRhVGFibGVTZXR0aW5nczxUPjtcbiAgLy8gU2VsZWN0aW9uTW9kZWwgZm9yIHVzZSB3aXRoIGNoZWNrYm94ZXNcbiAgX3NlbGVjdGlvbk1vZGVsVmFsdWU6IFNlbGVjdGlvbk1vZGVsPFQ+O1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0aW9uTW9kZWwoKTogU2VsZWN0aW9uTW9kZWw8VD4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbFZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25Nb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc2V0IHNlbGVjdGlvbk1vZGVsKHZhbDogU2VsZWN0aW9uTW9kZWw8VD4pIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbFZhbHVlID0gdmFsO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3Rpb25Nb2RlbFZhbHVlKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkcmVuKE1hdENoZWNrYm94KSBjaGVja2JveGVzOiBRdWVyeUxpc3Q8TWF0Q2hlY2tib3g+O1xuICBwcml2YXRlIF9pdGVtc1Nob3duOiBUW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5faXRlbXNTaG93biA9IHRoaXMuZGF0YVRhYmxlU2V0dGluZ3MuZGF0YVNvdXJjZS5kYXRhLnNsaWNlKDAsIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKTtcbiAgICB0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmRhdGFTb3VyY2UucGFnaW5hdG9yLnBhZ2Uuc3Vic2NyaWJlKChwYWdlRXZlbnQ6IFBhZ2VFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhZ2VFdmVudC5wYWdlSW5kZXggKiBwYWdlRXZlbnQucGFnZVNpemU7XG4gICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwYWdlRXZlbnQucGFnZVNpemU7XG4gICAgICB0aGlzLl9pdGVtc1Nob3duID0gdGhpcy5kYXRhVGFibGVTZXR0aW5ncy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gV2FybiBmb3IgcHJvcGVyIHVzYWdlIG9mIGNoZWNrYm94ZXMgYW5kIHNlbGVjdGlvbiBtb2RlbFxuICAgIGlmICh0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmRpc3BsYXllZENvbHVtbnMuc29tZShlID0+IGUgPT09ICdjaGVja2JveCcpICYmICF0aGlzLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1xcXG4gICAgICBJdCBpcyByZWNvbW1lbmRlZCB0byBwcm92aWRlIGEgc2VsZWN0aW9uIG1vZGVsIGluIGNoZWNrYm94IG1vZGVcXG5cXFxuICAgICAgZm9yIGV4YW1wbGU6IGB0aGlzLnNlbGVjdGlvbk1vZGVsID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUpO2BcXG5cXFxuICAgICAgYFsoc2VsZWN0aW9uTW9kZWwpXT1cInNlbGVjdGlvbk1vZGVsXCJgJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSk7XG4gICAgfVxuICAgIC8vIFdhcm4gZm9yIHByb3BlciB1c2FnZSBvZiBtZW51c1xuICAgIGlmICh0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmRpc3BsYXllZENvbHVtbnMuc29tZShlID0+IGUgPT09ICdtZW51JykgJiYgIXRoaXMuZGF0YVRhYmxlU2V0dGluZ3MubWVudSkge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCBwcm92aWRlIGEgbWVudSBpdGVtIGFycmF5IGZvciB0aGUgbWVudSBjb2x1bW4nKTtcbiAgICB9XG4gICAgLy8gV2FybiBmb3IgcHJvcGVyIHVzZSBvZiBmb3JtIGZpZWxkIGVsZW1lbnRzXG4gICAgaWYgKCh0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmNvbHVtbkRlZmluaXRpb25zLnNvbWUoZSA9PiB7XG4gICAgICByZXR1cm4gKGUubW9kZSA9PT0gRGF0YUNvbHVtbk1vZGUuY2hlY2tib3ggfHwgZS5tb2RlID09PSBEYXRhQ29sdW1uTW9kZS5pbnB1dCkgJiYgIWUuZGlzYWJsZUZvcm1GaWVsZDtcbiAgICB9KSkpIHtcbiAgICAgIGNvbnNvbGUud2FybignVXNpbmcgZm9ybSBmaWVsZCBlbGVtZW50cywgeW91IHNob3VsZCBzdXBwbHkgYSBkaXNhYmxpbmcgbWV0aG9kLCBlLmcuIGBkaXNhYmxlRm9ybUZpZWxkOiAocm93KSA9PiBmYWxzZWAnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlU2V0dGluZ3MuY29sdW1uRGVmaW5pdGlvbnMuc29tZShlID0+IHtcbiAgICAgIHJldHVybiBlLm1vZGUgPT09IERhdGFDb2x1bW5Nb2RlLmNoZWNrYm94ICYmICFlLmNoZWNrYm94U2V0dGluZ3M7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2Fybignc3VwcGx5IGNoZWNrYm94IHNldHRpbmdzIHdpdGggY2hlY2tib3ggY29sdW1uJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmNvbHVtbkRlZmluaXRpb25zLnNvbWUoZSA9PiB7XG4gICAgICByZXR1cm4gZS5tb2RlID09PSBEYXRhQ29sdW1uTW9kZS5pbnB1dCAmJiAhZS5pbnB1dFNldHRpbmdzO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3N1cHBseSBpbnB1dCBzZXR0aW5ncyB3aXRoIGlucHV0IGNvbHVtbicpO1xuICAgIH1cbiAgfVxuICAvLyBUaGUgZm9sbG93aW5nIEJsb2NrIGlzIGZvciBDaGVja2JveGVzIEJlaGF2aW9yXG4gIHB1YmxpYyBjaGVja2JveENoYW5nZShldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UsIHJvdzogVCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCBjaGVja2VkIH0gPSBldmVudDtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5kZXNlbGVjdChyb3cpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubGVuZ3RoID09PSBNYXRoLm1pbih0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGFyZVNvbWVTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5sZW5ndGggPiAwICYmICF0aGlzLmlzQWxsU2VsZWN0ZWQ7XG4gIH1cbiAgcHVibGljIGlzSXRlbVNlbGVjdGVkKHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQocm93KTtcbiAgfVxuICBwdWJsaWMgbWFzdGVyQ2hlY2tib3hDaGFuZ2UoZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgeyBzb3VyY2UsIGNoZWNrZWQgfSA9IGV2ZW50O1xuICAgIGlmICh0aGlzLmlzQWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXNTaG93bi5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChlKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHRyYWNrQnlDb2x1bW5OYW1lKGNvbHVtbjogRGF0YUNvbHVtbkRlZmluaXRpb248VD4sIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb2x1bW4uY29sdW1uTmFtZTtcbiAgfVxuICBnZXQgc21hbGxjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA5NjE7XG4gIH1cbiAgcHVibGljIGhhbmRsZVJvd0NsaWNrKGV2ZW50OiBFdmVudCwgcm93OiBUKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSB0YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyJylcbiAgICAgIHx8IGNsYXNzTGlzdC5jb250YWlucygncm93LWFjdGlvbi1idXR0b24nKVxuICAgICAgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXQtYnV0dG9uLXdyYXBwZXInKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YVRhYmxlU2V0dGluZ3MuY2xpY2thYmxlUm93cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGFUYWJsZVNldHRpbmdzLmhhbmRsZVJvd0NsaWNrID8gdGhpcy5kYXRhVGFibGVTZXR0aW5ncy5oYW5kbGVSb3dDbGljayhyb3cpIDogdGhpcy5zZWxlY3Rpb25Nb2RlbC50b2dnbGUocm93KTtcbiAgfVxuICBwdWJsaWMgaGFuZGxlQ2VsbENsaWNrKGNvbHVtbjogRGF0YUNvbHVtbkRlZmluaXRpb248VD4sIHJvdzogVCk6IHZvaWQge1xuICAgIGlmIChjb2x1bW4uaGFuZGxlQ2VsbENsaWNrICYmICEoY29sdW1uLm1vZGUgPT09IERhdGFDb2x1bW5Nb2RlLmNoZWNrYm94KSkge1xuICAgICAgY29sdW1uLmhhbmRsZUNlbGxDbGljayhyb3cpO1xuICAgIH1cbiAgfVxuICBnZXROZXN0ZWRWYWx1ZShjb2x1bW46IERhdGFDb2x1bW5EZWZpbml0aW9uPFQ+LCByb3c6IFQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gY29sdW1uLmNvbHVtbk5hbWUuc3BsaXQoJy4nKTtcbiAgICBsZXQgY2VsbENvbnRlbnQ6IGFueTtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAvLyAgR2V0dGluZyB0aGUgdmFsdWUgZnJvbSB0aGUgbGFzdCBldmFsdWF0ZWQgcGFyZW50IE9SIHRoZSByb3cgaXRzZWxmXG4gICAgICAvLyAgYWxsb3dpbmcgbmVzdGVkIHByb3BlcnRpZXMgdG8gYmUgY29ycmVjdGx5IGV2YWx1YXRlZFxuICAgICAgY2VsbENvbnRlbnQgPSAoY2VsbENvbnRlbnQgfHwgcm93KVtlbGVtZW50XTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2VsbENvbnRlbnQ7XG4gIH1cbiAgaXNSb3dTZWxlY3RlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlbCA/IHRoaXMuc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChyb3cpIDogZmFsc2U7XG4gIH1cbn1cbiJdfQ==