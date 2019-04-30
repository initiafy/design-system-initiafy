/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class YesOrNoDialogComponent {
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
if (false) {
    /** @type {?} */
    YesOrNoDialogComponent.prototype.dialogRef;
    /** @type {?} */
    YesOrNoDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW9yLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIveWVzLW9yLW5vL3llcy1vci1uby95ZXMtb3Itbm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWxFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQ1csU0FBK0MsRUFDdEIsSUFBdUI7UUFEaEQsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFDeEQsQ0FBQzs7OztJQUVKLFFBQVEsS0FBSSxDQUFDOzs7O0lBRU4sV0FBVztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLCtsQ0FBeUM7O2FBRTFDOzs7O1lBUFEsWUFBWTs0Q0FXZCxNQUFNLFNBQUMsZUFBZTs7OztJQUR2QiwyQ0FBc0Q7O0lBQ3RELHNDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgWWVzT3JOb0RpYWxvZ0RhdGEgfSBmcm9tICcuLi9tb2RlbHMvZGlhbG9nRGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LXllcy1vci1ubycsXG4gIHRlbXBsYXRlVXJsOiAnLi95ZXMtb3Itbm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi95ZXMtb3Itbm8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFllc09yTm9EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxZZXNPck5vRGlhbG9nQ29tcG9uZW50PixcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogWWVzT3JOb0RpYWxvZ0RhdGFcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=