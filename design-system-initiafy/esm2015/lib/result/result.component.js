/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ResultComponent {
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
if (false) {
    /** @type {?} */
    ResultComponent.prototype.icon;
    /** @type {?} */
    ResultComponent.prototype.iconFont;
    /** @type {?} */
    ResultComponent.prototype.message;
    /** @type {?} */
    ResultComponent.prototype.hasData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBTTFCO1FBTFMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUVsQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscWRBQXNDOzthQUV2Qzs7Ozs7bUJBRUUsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUhOLCtCQUFtQjs7SUFDbkIsbUNBQXVCOztJQUN2QixrQ0FBc0I7O0lBQ3RCLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0aWFmeS1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdWx0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWNvbiA9ICcnO1xuICBASW5wdXQoKSBpY29uRm9udCA9ICcnO1xuICBASW5wdXQoKSBtZXNzYWdlID0gJyc7XG4gIEBJbnB1dCgpIGhhc0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==