/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
        this.label = '';
        this.icon = '';
        this.iconFont = 'material-icons';
        this.tooltip = '';
        this.cssClass = '';
        this.size = 'big';
        this.disabled = false;
        this.callback = new EventEmitter();
    }
    Object.defineProperty(ActionButtonComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size + ' ' + this.cssClass;
        },
        enumerable: true,
        configurable: true
    });
    ActionButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-action-button',
                    template: "<button \n  class=\"action-button ripple\"\n  [ngClass]=\"classes\"\n  [matTooltip]=\"tooltip\"\n  [disabled]=\"disabled\"\n  (click)=\"callback.emit($event)\">\n  <div class=\"action-button-wrapper\">\n    <ng-template [ngIf]=\"icon\">\n      <initiafy-icon [icon]=\"icon\" [iconFont]=\"iconFont\" [size]=\"size\"></initiafy-icon>\n    </ng-template>\n    <h3> {{ label }} </h3>\n  </div>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ActionButtonComponent.ctorParameters = function () { return []; };
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
    return ActionButtonComponent;
}());
export { ActionButtonComponent };
if (false) {
    /** @type {?} */
    ActionButtonComponent.prototype.label;
    /** @type {?} */
    ActionButtonComponent.prototype.icon;
    /** @type {?} */
    ActionButtonComponent.prototype.iconFont;
    /** @type {?} */
    ActionButtonComponent.prototype.tooltip;
    /** @type {?} */
    ActionButtonComponent.prototype.cssClass;
    /** @type {?} */
    ActionButtonComponent.prototype.size;
    /** @type {?} */
    ActionButtonComponent.prototype.disabled;
    /** @type {?} */
    ActionButtonComponent.prototype.callback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFlRTtRQVRTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQW9ILGdCQUFnQixDQUFDO1FBQzdJLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQStCLEtBQUssQ0FBQztRQUN6QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFakIsc0JBQUksMENBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw4WkFBNkM7O2lCQUU5Qzs7Ozs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxNQUFNOztJQVFULDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlkscUJBQXFCOzs7SUFDaEMsc0NBQTRCOztJQUM1QixxQ0FBMkI7O0lBQzNCLHlDQUFzSjs7SUFDdEosd0NBQThCOztJQUM5Qix5Q0FBK0I7O0lBQy9CLHFDQUFrRDs7SUFDbEQseUNBQTBCOztJQUMxQix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0aWFmeS1hY3Rpb24tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaWNvbkZvbnQ6ICdpbml0aWFmeScgfCAnZ2x5cGhpY29uJyB8ICdmb250LWF3ZXNvbWUtYnJhbmQnIHwgJ2ZvbnQtYXdlc29tZS1zb2xpZCcgfCAnbWF0ZXJpYWwtaWNvbnMnIHwgJ21hdGVyaWFsLW91dGxpbmVkJyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBjc3NDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnYmlnJyB8ICdiaWdnZXInID0gJ2JpZyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIFxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplICsgJyAnICsgdGhpcy5jc3NDbGFzcztcbiAgfVxuXG59XG4iXX0=