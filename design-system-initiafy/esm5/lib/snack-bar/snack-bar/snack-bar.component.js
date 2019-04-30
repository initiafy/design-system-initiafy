/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent(data, snackBar) {
        this.data = data;
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    SnackBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SnackBarComponent.prototype.dismiss = /**
     * @return {?}
     */
    function () {
        this.snackBar.dismiss();
    };
    /**
     * @return {?}
     */
    SnackBarComponent.prototype.action = /**
     * @return {?}
     */
    function () {
        this.snackBar.dismiss();
        if (this.data.actionButtonFunction) {
            this.data.actionButtonFunction();
        }
    };
    SnackBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-snack-bar',
                    template: "<div class=\"full-width flex row align-items-center justify-content-space-between white-color mat-simple-snackbar\">\n  <div class=\"flex align-items-center default\">\n    <initiafy-icon *ngIf=\"data.icon\" class=\"margin-right-8\" [icon]=\"data.icon\"\n      [iconFont]=\"data.iconFont ?  data.iconFont : 'material-outlined'\"></initiafy-icon>\n    {{ data.message }}\n  </div>\n  <initiafy-button design=\"basic\" [cssClass]=\"'white-color'\" *ngIf=\"data.actionButtonLabel\" [label]=\"data.actionButtonLabel\" [tooltip]=\"data.actionButtonLabel\"\n    [disabled]=\"false\"></initiafy-button>\n  <initiafy-icon *ngIf=\"data.closeButton\" class=\"margin-left-16 noselect pointer\" (click)=\"dismiss()\"\n    [icon]=\"'close'\" [iconFont]=\"data.iconFont ?  data.iconFont : 'material-outlined'\"></initiafy-icon>\n  <!-- <mat-icon class=\"margin-left-16 noselect pointer\" *ngIf=\"data.closeButton\" (click)=\"dismiss()\">close</mat-icon> -->\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SnackBarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] },
        { type: MatSnackBar }
    ]; };
    return SnackBarComponent;
}());
export { SnackBarComponent };
if (false) {
    /** @type {?} */
    SnackBarComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    SnackBarComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvc25hY2stYmFyL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHcEU7SUFPRSwyQkFDcUMsSUFBa0IsRUFDN0MsUUFBcUI7UUFETSxTQUFJLEdBQUosSUFBSSxDQUFjO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQWE7SUFDM0IsQ0FBQzs7OztJQUVMLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFTSxtQ0FBTzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSxrQ0FBTTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG04QkFBeUM7O2lCQUUxQzs7OztnREFJSSxNQUFNLFNBQUMsa0JBQWtCO2dCQVhELFdBQVc7O0lBNEJ4Qyx3QkFBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLGlCQUFpQjs7O0lBRzFCLGlDQUFxRDs7Ozs7SUFDckQscUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNuYWNrQmFyRGF0YSB9IGZyb20gJy4uL21vZGVscy9zbmFjay1iYXItZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LXNuYWNrLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbmFjay1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbmFjay1iYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IFNuYWNrQmFyRGF0YSxcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGRpc21pc3MoKTogdm9pZCB7XG4gICAgdGhpcy5zbmFja0Jhci5kaXNtaXNzKCk7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xuICAgIGlmICh0aGlzLmRhdGEuYWN0aW9uQnV0dG9uRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMuZGF0YS5hY3Rpb25CdXR0b25GdW5jdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19