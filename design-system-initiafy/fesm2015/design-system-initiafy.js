import { Component, NgModule, Input, EventEmitter, Output, ViewChild, ViewChildren, Inject, Injectable, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatCheckbox, MatIconModule, MatCheckboxModule, MatMenuModule, MatFormFieldModule, MatPaginatorModule, MatTableModule, MatInputModule, MatButtonModule as MatButtonModule$1, MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule, MatProgressSpinnerModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material';
import { MatInputModule as MatInputModule$1 } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-header',
                template: "<div class=\"initiafy-header-wrapper\">\n  <div class=\"initiafy-header\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyHeaderModule {
}
InitiafyHeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [HeaderComponent],
                exports: [HeaderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidenavComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-sidenav',
                template: "<div id=\"initiafySidenav\">\n  <div class=\"initiafy-sidenav-container\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafySidenavModule {
}
InitiafySidenavModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SidenavComponent],
                exports: [SidenavComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-content',
                template: "<div class=\"initiafy-content\">\n  <ng-content></ng-content>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ContentComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyContentModule {
}
InitiafyContentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ContentComponent],
                exports: [ContentComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionBarComponent {
    constructor() {
        this.cssClass = '';
        this.content = '';
        this.isLoading = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get cssClasses() {
        /** @type {?} */
        let _cssClasses = this.cssClass;
        if (this.content === 'end') {
            _cssClasses = _cssClasses + ' justify-content-end';
        }
        return _cssClasses;
    }
}
ActionBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-action-bar',
                template: "<div class=\"action-bar\" [ngClass]=\"cssClasses\">\n  <ng-content></ng-content>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ActionBarComponent.ctorParameters = () => [];
ActionBarComponent.propDecorators = {
    cssClass: [{ type: Input }],
    content: [{ type: Input }],
    isLoading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyActionBarModule {
}
InitiafyActionBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ActionBarComponent],
                exports: [ActionBarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconComponent {
    constructor() {
        this.icon = '';
        this.iconFont = 'material-icons';
        this.size = 'small';
        this.cssClass = '';
        this.tooltip = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get iconClasses() {
        /** @type {?} */
        let classes;
        switch (this.iconFont) {
            case 'font-awesome-brand': {
                classes = 'fab fa-' + this.icon;
                break;
            }
            case 'font-awesome-solid': {
                classes = 'fas fa-' + this.icon;
                break;
            }
            case 'glyphicon': {
                classes = 'glyphicon glyphicon-' + this.icon;
                break;
            }
            case 'initiafy': {
                classes = 'initiafy-icons ' + this.icon;
                break;
            }
            case 'material-outlined': {
                classes = 'material-icons-outlined ' + this.icon;
                break;
            }
            default: {
                classes = 'material-icons';
            }
        }
        return classes + ' ' + this.cssClass;
    }
    /**
     * @return {?}
     */
    get showText() {
        /** @type {?} */
        let shouldShow;
        switch (this.iconFont) {
            case 'font-awesome-brand': {
                shouldShow = false;
                break;
            }
            case 'font-awesome-solid': {
                shouldShow = false;
                break;
            }
            case 'glyphicon': {
                shouldShow = true;
                break;
            }
            case 'initiafy': {
                shouldShow = false;
                break;
            }
            case 'material-outlined': {
                shouldShow = false;
                break;
            }
            default: {
                shouldShow = true;
            }
        }
        return shouldShow;
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-icon',
                template: "<i [ngClass]=\"iconClasses\" [class]=\"size\" [matTooltip]=\"tooltip\">\n  <ng-container *ngIf=\"showText\">{{ icon }}</ng-container>\n</i>",
                styles: [""]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    icon: [{ type: Input }],
    iconFont: [{ type: Input }],
    size: [{ type: Input }],
    cssClass: [{ type: Input }],
    tooltip: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyIconModule {
}
InitiafyIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatTooltipModule],
                declarations: [IconComponent],
                exports: [IconComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionButtonComponent {
    constructor() {
        this.label = '';
        this.icon = '';
        this.iconFont = 'material-icons';
        this.tooltip = '';
        this.cssClass = '';
        this.size = 'big';
        this.disabled = false;
        this.callback = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get classes() {
        return this.size + ' ' + this.cssClass;
    }
}
ActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-action-button',
                template: "<button \n  class=\"action-button ripple\"\n  [ngClass]=\"classes\"\n  [matTooltip]=\"tooltip\"\n  [disabled]=\"disabled\"\n  (click)=\"callback.emit($event)\">\n  <div class=\"action-button-wrapper\">\n    <ng-template [ngIf]=\"icon\">\n      <initiafy-icon [icon]=\"icon\" [iconFont]=\"iconFont\" [size]=\"size\"></initiafy-icon>\n    </ng-template>\n    <h3> {{ label }} </h3>\n  </div>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ActionButtonComponent.ctorParameters = () => [];
ActionButtonComponent.propDecorators = {
    label: [{ type: Input }],
    icon: [{ type: Input }],
    iconFont: [{ type: Input }],
    tooltip: [{ type: Input }],
    cssClass: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    callback: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyActionButtonModule {
}
InitiafyActionButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatTooltipModule,
                    InitiafyIconModule
                ],
                declarations: [ActionButtonComponent],
                exports: [ActionButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        /**
         * Design of the button
         */
        this.design = 'main';
        /**
         * Type attribute of the button
         */
        this.type = 'submit';
        /**
         * Icon library to whivh the icon belongs
         */
        this.iconFont = 'material-icons';
        /**
         * Additional css classes to apply to the button
         */
        this.cssClass = '';
        /**
         * Text for the button's tooltip
         */
        this.tooltip = '';
        /**
         * Disable state of the button
         */
        this.disabled = false;
        /**
         * Hide label on mobile screens
         */
        this.hideLabelOnMobile = false;
        /**
         * Method called when button is clicked
         */
        this.callback = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get classes() {
        /** @type {?} */
        let classes = this.design;
        if (this.design !== 'white' && this.color) {
            classes += ' ' + this.color;
        }
        if (this.hideLabelOnMobile) {
            classes += ' hide-label-on-mobile';
        }
        if (this.cssClass) {
            classes += ' ' + this.cssClass;
        }
        return classes;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-button',
                template: "<button \n  mat-button\n  class=\"button\"\n  [class.single]=\"!label\"\n  [ngClass]=\"classes\"\n  [type]=\"type\"\n  [matTooltip]=\"tooltip\"\n  [disabled]=\"disabled\"\n  (click)=\"callback.emit($event)\"\n  >\n  <ng-template [ngIf]=\"icon\"><initiafy-icon [icon]=\"icon\" [iconFont]=\"iconFont\"></initiafy-icon></ng-template>\n  <ng-template [ngIf]=\"label\"><span class=\"button-label\">{{ label }}</span></ng-template>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    design: [{ type: Input }],
    color: [{ type: Input }],
    label: [{ type: Input }],
    type: [{ type: Input }],
    icon: [{ type: Input }],
    iconFont: [{ type: Input }],
    cssClass: [{ type: Input }],
    tooltip: [{ type: Input }],
    disabled: [{ type: Input }],
    hideLabelOnMobile: [{ type: Input }],
    callback: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyButtonModule {
}
InitiafyButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatTooltipModule,
                    InitiafyIconModule
                ],
                declarations: [ButtonComponent],
                exports: [ButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() {
        this.cssClass = '';
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-card',
                template: "<div class=\"initiafy-card\" [ngClass]=\"cssClass\">\n  <ng-content></ng-content>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    cssClass: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyCardModule {
}
InitiafyCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CardComponent],
                exports: [CardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DataColumnMode = {
    // If this column is a number index column
    count: 'count',
    // If Data is nested (use the getNestedValue method)
    nested: 'nested',
    // If DataName does not correspond to desired value use a custom transformer
    transformer: 'transformer',
    // If this is a menu column
    menu: 'menu',
    // If an additional checkboxes is required in the table
    checkbox: 'extra-checkbox',
    // If this is a column with an input
    input: 'input',
    // Used for rendering a list in the cell
    list: 'list',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// see here https://stackblitz.com/edit/angular-material-table-responsive?file=app%2Fapp.component.html
/**
 * If you want to use a checkbox column on the left hand side and a selection model,
 * then pass in the 'checkbox' string as the first element of the displayedColumns array:
 * `displayedColumns = ['checkbox', ...rest]`
 * You should also provide a selectionModel in this case
 * ---------------------------------
 * @template T
 */
class InitiafyDataTableComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyDataTableModule {
}
InitiafyDataTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InitiafyDataTableComponent],
                imports: [
                    CommonModule,
                    InitiafyButtonModule,
                    MatIconModule,
                    MatCheckboxModule,
                    MatMenuModule,
                    MatFormFieldModule,
                    MatPaginatorModule,
                    MatTableModule,
                    MatInputModule
                ],
                exports: [InitiafyDataTableComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressBarComponent {
    constructor() {
        this.isLoading = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-progress-bar',
                template: "<div class=\"progress-bar\" *ngIf=\"isLoading\">\n    <div class=\"indeterminate\"></div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    isLoading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyProgressBarModule {
}
InitiafyProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ProgressBarComponent],
                exports: [ProgressBarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingCardComponent {
    constructor() {
        this.cssClass = '';
        this.size = 'std';
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get classes() {
        return this.cssClass + ' ' + this.size;
    }
}
LoadingCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-loading-card',
                template: "<div class=\"loading-card\" [ngClass]=\"classes\">\n  <div class=\"loading-card-content\">\n    <ng-content></ng-content>\n  </div>\n  <initiafy-progress-bar [isLoading]=\"isLoading\" class=\"loading-card-bar\"></initiafy-progress-bar>\n</div>",
                styles: [":host{width:100%;display:flex;align-items:center;justify-content:center}"]
            }] }
];
/** @nocollapse */
LoadingCardComponent.ctorParameters = () => [];
LoadingCardComponent.propDecorators = {
    cssClass: [{ type: Input }],
    size: [{ type: Input }],
    isLoading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyLoadingCardModule {
}
InitiafyLoadingCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InitiafyCardModule, InitiafyProgressBarModule],
                declarations: [LoadingCardComponent],
                exports: [LoadingCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    constructor() {
        this.overlay = false;
        this.hideCloseButton = false;
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-modal',
                template: "<div class=\"initiafy-modal\" [class.is-overlay]=\"overlay\">\n  <div class=\"initiafy-modal-root\">\n    <div class=\"initiafy-modal-close\" (click)=\"close.emit()\" *ngIf=\"!hideCloseButton\">\n      <initiafy-icon icon=\"close\"></initiafy-icon>\n    </div>\n    <div class=\"initiafy-modal-content\">\n      <div class=\"flex justify-content-center column full-height\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [];
ModalComponent.propDecorators = {
    overlay: [{ type: Input }],
    hideCloseButton: [{ type: Input }],
    close: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyModalModule {
}
InitiafyModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InitiafyIconModule],
                declarations: [ModalComponent],
                exports: [ModalComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResultComponent {
    constructor() {
        this.icon = '';
        this.iconFont = '';
        this.message = '';
        this.hasData = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-result',
                template: "<ng-template [ngIf]=\"hasData\" [ngIfElse]=\"emptyContainer\">\n  <ng-content></ng-content>\n</ng-template>\n<ng-template #emptyContainer>\n  <div class=\"full-width flex-justify-align-center column default height-500\">\n    <initiafy-icon cssClass=\"feedback-color\" icon=\"{{ icon }}\" iconFont=\"{{ iconFont }}\" size=\"big\"></initiafy-icon>\n    <p class=\"text24 feedback-color text-center margin-y-std\">{{ message }}</p>\n  </div>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ResultComponent.ctorParameters = () => [];
ResultComponent.propDecorators = {
    icon: [{ type: Input }],
    iconFont: [{ type: Input }],
    message: [{ type: Input }],
    hasData: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyResultModule {
}
InitiafyResultModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    InitiafyIconModule
                ],
                declarations: [ResultComponent],
                exports: [ResultComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchBarComponent {
    constructor() {
        /**
         * Placeholder text for the Input
         */
        this.placeholder = 'Enter search term';
        /**
         * Color Scheme for the component
         */
        this.color = 'primary';
        /**
         * Initial Value for the Input
         */
        this.value = 'Search term';
        /**
         * Text to display on expand button when component is collapsed
         */
        this.buttontext = 'Search';
        /**
         * Icon to display on button when component is collapsed
         */
        this.buttonicon = 'search';
        /**
         * Event triggered when the form is submitted
         */
        this.search = new EventEmitter();
        // Two Way Binding Properties
        this.collapsedValue = false;
        /**
         * Event triggered when the collapsed state of the component is toggled
         */
        this.collapsedChange = new EventEmitter();
    }
    /**
     * Whether the component is collapsed
     * @return {?}
     */
    get collapsed() {
        return this.collapsedValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collapsed(value) {
        this.collapsedValue = value;
        this.collapsedChange.emit(this.collapsedValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    onSubmit() {
        this.search.emit(this.value);
    }
    /**
     * @return {?}
     */
    unCollapse() {
        this.collapsed = false;
    }
}
SearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-search-bar',
                template: "<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"flex align-items-flex-end\">\n    <ng-template\n      #notCollapsedTemplate\n      [ngIf]=\"!collapsed\"\n      [ngIfElse]=\"collapsedTemplate\"\n    >\n      <mat-form-field\n        [color]=\"color\"\n        floatLabel=\"always\"\n        class=\"example-form-field\"\n      >\n        <input\n          matInput\n          type=\"text\"\n          [placeholder]=\"placeholder\"\n          [(ngModel)]=\"value\"\n          name=\"value\"\n        />\n        <button\n          mat-button\n          *ngIf=\"value\"\n          type=\"button\"\n          matSuffix\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"value = ''\"\n        >\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n      <initiafy-button\n        class=\"margin-bottom-20 flex align-items-end\"\n        [label]=\"buttontext\"\n        [color]=\"color\"\n        type=\"submit\"\n        aria-label=\"Search\"\n      >\n      </initiafy-button>\n    </ng-template>\n    <ng-template #collapsedTemplate>\n      <initiafy-button\n        class=\"margin-bottom-20 flex align-items-end\"\n        type=\"button\"\n        (callback)=\"unCollapse()\"\n        [icon]=\"buttonicon\"\n        [color]=\"color\"\n        aria-label=\"Search\"\n      >\n      </initiafy-button>\n    </ng-template>\n  </div>\n</form>\n",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
SearchBarComponent.ctorParameters = () => [];
SearchBarComponent.propDecorators = {
    placeholder: [{ type: Input }],
    color: [{ type: Input }],
    value: [{ type: Input }],
    buttontext: [{ type: Input }],
    buttonicon: [{ type: Input }],
    search: [{ type: Output }],
    collapsed: [{ type: Input }],
    collapsedChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafySearchBarModule {
}
InitiafySearchBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule$1,
                    MatButtonModule$1,
                    MatIconModule,
                    InitiafyButtonModule,
                    InitiafyIconModule
                ],
                declarations: [SearchBarComponent],
                exports: [SearchBarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnackBarComponent {
    /**
     * @param {?} data
     * @param {?} snackBar
     */
    constructor(data, snackBar) {
        this.data = data;
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    dismiss() {
        this.snackBar.dismiss();
    }
    /**
     * @return {?}
     */
    action() {
        this.snackBar.dismiss();
        if (this.data.actionButtonFunction) {
            this.data.actionButtonFunction();
        }
    }
}
SnackBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-snack-bar',
                template: "<div class=\"full-width flex row align-items-center justify-content-space-between white-color mat-simple-snackbar\">\n  <div class=\"flex align-items-center default\">\n    <initiafy-icon *ngIf=\"data.icon\" class=\"margin-right-8\" [icon]=\"data.icon\"\n      [iconFont]=\"data.iconFont ?  data.iconFont : 'material-outlined'\"></initiafy-icon>\n    {{ data.message }}\n  </div>\n  <initiafy-button design=\"basic\" [cssClass]=\"'white-color'\" *ngIf=\"data.actionButtonLabel\" [label]=\"data.actionButtonLabel\" [tooltip]=\"data.actionButtonLabel\"\n    [disabled]=\"false\"></initiafy-button>\n  <initiafy-icon *ngIf=\"data.closeButton\" class=\"margin-left-16 noselect pointer\" (click)=\"dismiss()\"\n    [icon]=\"'close'\" [iconFont]=\"data.iconFont ?  data.iconFont : 'material-outlined'\"></initiafy-icon>\n  <!-- <mat-icon class=\"margin-left-16 noselect pointer\" *ngIf=\"data.closeButton\" (click)=\"dismiss()\">close</mat-icon> -->\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
SnackBarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] },
    { type: MatSnackBar }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnackBarService {
    /**
     * @param {?} router
     * @param {?} snackBar
     */
    constructor(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        this.isAPersistentMessage = false;
        // clear alert message on route change
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationStart) {
                this.snackBar.dismiss();
            }
        }));
    }
    /**
     * @param {?} message
     * @param {?} helpActionLabel
     * @param {?} helpFunction
     * @return {?}
     */
    help(message, helpActionLabel, helpFunction) {
        this.isAPersistentMessage = false;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: '',
                message: message,
                closeButton: true,
                actionButtonLabel: helpActionLabel,
                actionButtonFunction: helpFunction
            },
            duration: 600000
        });
    }
    /**
     * @param {?} message
     * @return {?}
     */
    success(message) {
        this.isAPersistentMessage = false;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: 'done',
                message: message,
                closeButton: false
            },
            duration: 6000
        });
    }
    /**
     * @param {?} array
     * @return {?}
     */
    handleServerErrors(array) {
        /** @type {?} */
        let errorMessage = '';
        array.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => (errorMessage = e.message + '\n')));
        this.error(errorMessage);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    error(message) {
        this.isAPersistentMessage = true;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: 'warning',
                message: message,
                closeButton: true
            },
            duration: 600000
        });
    }
    /**
     * @return {?}
     */
    dismissPersistentMessages() {
        if (this.isAPersistentMessage) {
            this.snackBar.dismiss();
        }
    }
}
SnackBarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SnackBarService.ctorParameters = () => [
    { type: Router },
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarService.ngInjectableDef = defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(inject(Router), inject(MatSnackBar$1)); }, token: SnackBarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafySnackBarModule {
}
InitiafySnackBarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SnackBarComponent],
                imports: [
                    CommonModule,
                    MatSnackBarModule,
                    InitiafyIconModule,
                    InitiafyButtonModule
                ],
                providers: [SnackBarService],
                entryComponents: [SnackBarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-spinner',
                template: "<mat-spinner></mat-spinner>",
                styles: [""]
            }] }
];
/** @nocollapse */
SpinnerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafySpinnerModule {
}
InitiafySpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [MatProgressSpinnerModule],
                declarations: [SpinnerComponent],
                exports: [SpinnerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YesOrNoDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    closeDialog() {
        this.dialogRef.close();
    }
}
YesOrNoDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-yes-or-no',
                template: "<div>\n  <div class=\"flex row justify-content-end\">\n    <div class=\"pointer\" (click)=\"closeDialog()\">\n      <initiafy-icon icon=\"close\"></initiafy-icon>\n    </div>\n  </div>\n  <div class=\"flex justify-content-center\">\n    <h1 mat-dialog-title *ngIf=\"data.title\">{{ data.title }}</h1>\n  </div>\n\n  <div mat-dialog-content align=\"center\">\n    <div class=\"full-width margin-top-std\">\n      <div>\n        <initiafy-icon icon=\"warning\"></initiafy-icon>\n        <!-- <mat-icon class=\"text32\">warning</mat-icon> -->\n      </div>\n    </div>\n\n    <div class=\"full-width\">\n      <div [innerHTML]=\"data.message\">\n      </div>\n    </div>\n  </div>\n  <div class=\"full-width flex row justify-content-space-between margin-top-std\">\n    <button mat-stroked-button color=\"primary\" type=\"button\" [mat-dialog-close]=\"false\" *ngIf=\"data.noButtonLabel\">\n      {{ data.noButtonLabel }}\n    </button>\n    <button mat-flat-button color=\"primary\" type=\"button\" [mat-dialog-close]=\"true\" cdkFocusInitial>\n      {{ data.yesButtonLabel }}\n    </button>\n  </div>\n</div>",
                styles: [".close-icon{top:16px;right:16px;z-index:999;padding:10px}"]
            }] }
];
/** @nocollapse */
YesOrNoDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YesOrNoService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * Example usage
     * returns MatDialogRef generated by MatDialog.open();
     * therefore same api applies:
     * DialogService.show(data: YesOrNoDialogData).afterClosed() returns an Observable of type boolean indeicating yes or no
     * @param {?} data
     * @return {?}
     */
    show(data) {
        /** @type {?} */
        const dialogRef = this.dialog;
        if (dialogRef.openDialogs.length > 0) {
            return;
        }
        /** @type {?} */
        let widthConfig = '350px';
        if (data && data.width) {
            widthConfig = data.width;
        }
        return dialogRef.open(YesOrNoDialogComponent, {
            width: widthConfig,
            data: data
        });
    }
}
YesOrNoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
YesOrNoService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ YesOrNoService.ngInjectableDef = defineInjectable({ factory: function YesOrNoService_Factory() { return new YesOrNoService(inject(MatDialog$1)); }, token: YesOrNoService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitiafyYesOrNoModule {
}
InitiafyYesOrNoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    YesOrNoDialogComponent
                ],
                imports: [
                    CommonModule,
                    InitiafyIconModule,
                    MatButtonModule$1,
                    MatDialogModule
                ],
                exports: [
                    YesOrNoDialogComponent
                ],
                providers: [
                    YesOrNoService
                ],
                entryComponents: [
                    YesOrNoDialogComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DesignSystemInitiafyModule {
}
DesignSystemInitiafyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    InitiafyHeaderModule,
                    InitiafySidenavModule,
                    InitiafyContentModule,
                    InitiafyActionBarModule,
                    InitiafyActionButtonModule,
                    InitiafyButtonModule,
                    InitiafyCardModule,
                    InitiafyDataTableModule,
                    InitiafyIconModule,
                    InitiafyLoadingCardModule,
                    InitiafyModalModule,
                    InitiafyProgressBarModule,
                    InitiafyResultModule,
                    InitiafySearchBarModule,
                    InitiafySnackBarModule,
                    InitiafySpinnerModule,
                    InitiafyYesOrNoModule
                ],
                exports: [
                    InitiafyHeaderModule,
                    InitiafySidenavModule,
                    InitiafyContentModule,
                    InitiafyActionBarModule,
                    InitiafyActionButtonModule,
                    InitiafyButtonModule,
                    InitiafyCardModule,
                    InitiafyDataTableModule,
                    InitiafyIconModule,
                    InitiafyLoadingCardModule,
                    InitiafyModalModule,
                    InitiafyProgressBarModule,
                    InitiafySearchBarModule,
                    InitiafyResultModule,
                    InitiafySearchBarModule,
                    InitiafySnackBarModule,
                    InitiafySpinnerModule,
                    InitiafyYesOrNoModule
                ],
                declarations: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DataColumnMode, DesignSystemInitiafyModule, InitiafyActionBarModule, InitiafyActionButtonModule, InitiafyButtonModule, InitiafyCardModule, InitiafyContentModule, InitiafyDataTableComponent, InitiafyDataTableModule, InitiafyHeaderModule, InitiafyIconModule, InitiafyLoadingCardModule, InitiafyModalModule, InitiafyProgressBarModule, InitiafyResultModule, InitiafySearchBarModule, InitiafySidenavModule, InitiafySnackBarModule, InitiafySpinnerModule, InitiafyYesOrNoModule, SnackBarComponent, SnackBarService, YesOrNoDialogComponent, YesOrNoService, HeaderComponent as ɵa, SidenavComponent as ɵb, ContentComponent as ɵc, ActionBarComponent as ɵd, IconComponent as ɵe, ActionButtonComponent as ɵf, ButtonComponent as ɵg, CardComponent as ɵh, InitiafyDataTableModule as ɵi, InitiafyDataTableComponent as ɵj, ProgressBarComponent as ɵk, LoadingCardComponent as ɵl, ModalComponent as ɵm, ResultComponent as ɵn, SearchBarComponent as ɵo, InitiafySnackBarModule as ɵp, SnackBarComponent as ɵq, SnackBarService as ɵs, SpinnerComponent as ɵt, InitiafyYesOrNoModule as ɵu, YesOrNoDialogComponent as ɵv, YesOrNoService as ɵx };
//# sourceMappingURL=design-system-initiafy.js.map
