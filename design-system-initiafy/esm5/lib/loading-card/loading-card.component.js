/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var LoadingCardComponent = /** @class */ (function () {
    function LoadingCardComponent() {
        this.cssClass = '';
        this.size = 'std';
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    LoadingCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(LoadingCardComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cssClass + ' ' + this.size;
        },
        enumerable: true,
        configurable: true
    });
    LoadingCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-loading-card',
                    template: "<div class=\"loading-card\" [ngClass]=\"classes\">\n  <div class=\"loading-card-content\">\n    <ng-content></ng-content>\n  </div>\n  <initiafy-progress-bar [isLoading]=\"isLoading\" class=\"loading-card-bar\"></initiafy-progress-bar>\n</div>",
                    styles: [":host{width:100%;display:flex;align-items:center;justify-content:center}"]
                }] }
    ];
    /** @nocollapse */
    LoadingCardComponent.ctorParameters = function () { return []; };
    LoadingCardComponent.propDecorators = {
        cssClass: [{ type: Input }],
        size: [{ type: Input }],
        isLoading: [{ type: Input }]
    };
    return LoadingCardComponent;
}());
export { LoadingCardComponent };
if (false) {
    /** @type {?} */
    LoadingCardComponent.prototype.cssClass;
    /** @type {?} */
    LoadingCardComponent.prototype.size;
    /** @type {?} */
    LoadingCardComponent.prototype.isLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1jYXJkL2xvYWRpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBVUU7UUFKUyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFnRCxLQUFLLENBQUM7UUFDMUQsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVwQixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7SUFFRCxzQkFBSSx5Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLCtQQUE0Qzs7aUJBRTdDOzs7OzsyQkFFRSxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFXUiwyQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksb0JBQW9COzs7SUFDL0Isd0NBQXVCOztJQUN2QixvQ0FBbUU7O0lBQ25FLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0aWFmeS1sb2FkaW5nLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjc3NDbGFzcyA9ICcnO1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ3N0ZCcgfCAnbWVkaXVtJyB8ICdiaWcnIHwgJ2Z1bGwnID0gJ3N0ZCc7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jc3NDbGFzcyArICcgJyArIHRoaXMuc2l6ZTtcbiAgfVxuXG59XG4iXX0=