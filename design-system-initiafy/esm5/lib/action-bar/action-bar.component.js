/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent() {
        this.cssClass = '';
        this.content = '';
        this.isLoading = '';
    }
    /**
     * @return {?}
     */
    ActionBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ActionBarComponent.prototype, "cssClasses", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var _cssClasses = this.cssClass;
            if (this.content === 'end') {
                _cssClasses = _cssClasses + ' justify-content-end';
            }
            return _cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-action-bar',
                    template: "<div class=\"action-bar\" [ngClass]=\"cssClasses\">\n  <ng-content></ng-content>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ActionBarComponent.ctorParameters = function () { return []; };
    ActionBarComponent.propDecorators = {
        cssClass: [{ type: Input }],
        content: [{ type: Input }],
        isLoading: [{ type: Input }]
    };
    return ActionBarComponent;
}());
export { ActionBarComponent };
if (false) {
    /** @type {?} */
    ActionBarComponent.prototype.cssClass;
    /** @type {?} */
    ActionBarComponent.prototype.content;
    /** @type {?} */
    ActionBarComponent.prototype.isLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBVUU7UUFKUyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFFUixDQUFDOzs7O0lBRWpCLHFDQUFROzs7SUFBUjtJQUNBLENBQUM7SUFFRCxzQkFBSSwwQ0FBVTs7OztRQUFkOztnQkFDTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDMUIsV0FBVyxHQUFHLFdBQVcsR0FBSSxzQkFBc0IsQ0FBQzthQUNyRDtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLG9HQUEwQzs7aUJBRTNDOzs7OzsyQkFFRSxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFlUix5QkFBQztDQUFBLEFBdkJELElBdUJDO1NBbEJZLGtCQUFrQjs7O0lBQzdCLHNDQUF1Qjs7SUFDdkIscUNBQXNCOztJQUN0Qix1Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5pdGlhZnktYWN0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNzc0NsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAnJztcbiAgQElucHV0KCkgaXNMb2FkaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIGxldCBfY3NzQ2xhc3NlcyA9IHRoaXMuY3NzQ2xhc3M7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gJ2VuZCcpIHtcbiAgICAgIF9jc3NDbGFzc2VzID0gX2Nzc0NsYXNzZXMgKyAgJyBqdXN0aWZ5LWNvbnRlbnQtZW5kJztcbiAgICB9XG4gICAgcmV0dXJuIF9jc3NDbGFzc2VzO1xuICB9XG5cbn1cbiJdfQ==