/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
export class SnackBarComponent {
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
if (false) {
    /** @type {?} */
    SnackBarComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    SnackBarComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvc25hY2stYmFyL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRcEUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFFNUIsWUFDcUMsSUFBa0IsRUFDN0MsUUFBcUI7UUFETSxTQUFJLEdBQUosSUFBSSxDQUFjO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQWE7SUFDM0IsQ0FBQzs7OztJQUVMLFFBQVE7SUFDUixDQUFDOzs7O0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG04QkFBeUM7O2FBRTFDOzs7OzRDQUlJLE1BQU0sU0FBQyxrQkFBa0I7WUFYRCxXQUFXOzs7O0lBV3BDLGlDQUFxRDs7Ozs7SUFDckQscUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNuYWNrQmFyRGF0YSB9IGZyb20gJy4uL21vZGVscy9zbmFjay1iYXItZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LXNuYWNrLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbmFjay1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbmFjay1iYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IFNuYWNrQmFyRGF0YSxcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGRpc21pc3MoKTogdm9pZCB7XG4gICAgdGhpcy5zbmFja0Jhci5kaXNtaXNzKCk7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xuICAgIGlmICh0aGlzLmRhdGEuYWN0aW9uQnV0dG9uRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMuZGF0YS5hY3Rpb25CdXR0b25GdW5jdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19