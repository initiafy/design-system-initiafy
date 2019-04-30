/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.overlay = false;
        this.hideCloseButton = false;
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-modal',
                    template: "<div class=\"initiafy-modal\" [class.is-overlay]=\"overlay\">\n  <div class=\"initiafy-modal-root\">\n    <div class=\"initiafy-modal-close\" (click)=\"close.emit()\" *ngIf=\"!hideCloseButton\">\n      <initiafy-icon icon=\"close\"></initiafy-icon>\n    </div>\n    <div class=\"initiafy-modal-content\">\n      <div class=\"flex justify-content-center column full-height\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return []; };
    ModalComponent.propDecorators = {
        overlay: [{ type: Input }],
        hideCloseButton: [{ type: Input }],
        close: [{ type: Output }]
    };
    return ModalComponent;
}());
export { ModalComponent };
if (false) {
    /** @type {?} */
    ModalComponent.prototype.overlay;
    /** @type {?} */
    ModalComponent.prototype.hideCloseButton;
    /** @type {?} */
    ModalComponent.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGVzaWduLXN5c3RlbS1pbml0aWFmeS8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFVRTtRQUpTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFckIsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsaWRBQXFDOztpQkFFdEM7Ozs7OzBCQUVFLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxNQUFNOztJQU9ULHFCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksY0FBYzs7O0lBQ3pCLGlDQUF5Qjs7SUFDekIseUNBQWlDOztJQUNqQywrQkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG92ZXJsYXkgPSBmYWxzZTtcbiAgQElucHV0KCkgaGlkZUNsb3NlQnV0dG9uID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==