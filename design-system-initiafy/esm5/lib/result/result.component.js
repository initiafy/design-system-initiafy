/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this.icon = '';
        this.iconFont = '';
        this.message = '';
        this.hasData = false;
    }
    /**
     * @return {?}
     */
    ResultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ResultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-result',
                    template: "<ng-template [ngIf]=\"hasData\" [ngIfElse]=\"emptyContainer\">\n  <ng-content></ng-content>\n</ng-template>\n<ng-template #emptyContainer>\n  <div class=\"full-width flex-justify-align-center column default height-500\">\n    <initiafy-icon cssClass=\"feedback-color\" icon=\"{{ icon }}\" iconFont=\"{{ iconFont }}\" size=\"big\"></initiafy-icon>\n    <p class=\"text24 feedback-color text-center margin-y-std\">{{ message }}</p>\n  </div>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ResultComponent.ctorParameters = function () { return []; };
    ResultComponent.propDecorators = {
        icon: [{ type: Input }],
        iconFont: [{ type: Input }],
        message: [{ type: Input }],
        hasData: [{ type: Input }]
    };
    return ResultComponent;
}());
export { ResultComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBV0U7UUFMUyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQVksS0FBSyxDQUFDO0lBRWxCLENBQUM7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFkQUFzQzs7aUJBRXZDOzs7Ozt1QkFFRSxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQU9SLHNCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxlQUFlOzs7SUFDMUIsK0JBQW1COztJQUNuQixtQ0FBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFDdEIsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN1bHQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uID0gJyc7XG4gIEBJbnB1dCgpIGljb25Gb250ID0gJyc7XG4gIEBJbnB1dCgpIG1lc3NhZ2UgPSAnJztcbiAgQElucHV0KCkgaGFzRGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19