/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ButtonComponent {
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
if (false) {
    /**
     * Design of the button
     * @type {?}
     */
    ButtonComponent.prototype.design;
    /**
     * Color palette of the button
     * @type {?}
     */
    ButtonComponent.prototype.color;
    /**
     * Text label for the button
     * @type {?}
     */
    ButtonComponent.prototype.label;
    /**
     * Type attribute of the button
     * @type {?}
     */
    ButtonComponent.prototype.type;
    /**
     * Icon name of icon to appear
     * @type {?}
     */
    ButtonComponent.prototype.icon;
    /**
     * Icon library to whivh the icon belongs
     * @type {?}
     */
    ButtonComponent.prototype.iconFont;
    /**
     * Additional css classes to apply to the button
     * @type {?}
     */
    ButtonComponent.prototype.cssClass;
    /**
     * Text for the button's tooltip
     * @type {?}
     */
    ButtonComponent.prototype.tooltip;
    /**
     * Disable state of the button
     * @type {?}
     */
    ButtonComponent.prototype.disabled;
    /**
     * Hide label on mobile screens
     * @type {?}
     */
    ButtonComponent.prototype.hideLabelOnMobile;
    /**
     * Method called when button is clicked
     * @type {?}
     */
    ButtonComponent.prototype.callback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLGVBQWU7SUF5QjFCOzs7O1FBdkJTLFdBQU0sR0FBMEMsTUFBTSxDQUFDOzs7O1FBTXZELFNBQUksR0FBa0MsUUFBUSxDQUFDOzs7O1FBSS9DLGFBQVEsR0FDd0UsZ0JBQWdCLENBQUM7Ozs7UUFFakcsYUFBUSxHQUFXLEVBQUUsQ0FBQzs7OztRQUV0QixZQUFPLEdBQVcsRUFBRSxDQUFDOzs7O1FBRXJCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFFakIsc0JBQWlCLEdBQVksS0FBSyxDQUFDOzs7O1FBRWxDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXhCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7SUFFZCxJQUFJLE9BQU87O1lBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QyxPQUFPLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixPQUFPLElBQUksdUJBQXVCLENBQUM7U0FDcEM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixrY0FBc0M7O2FBRXZDOzs7OztxQkFHRSxLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLO21CQUVMLEtBQUs7dUJBRUwsS0FBSzt1QkFHTCxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSztnQ0FFTCxLQUFLO3VCQUVMLE1BQU07Ozs7Ozs7SUFyQlAsaUNBQWdFOzs7OztJQUVoRSxnQ0FBd0M7Ozs7O0lBRXhDLGdDQUF1Qjs7Ozs7SUFFdkIsK0JBQXdEOzs7OztJQUV4RCwrQkFBc0I7Ozs7O0lBRXRCLG1DQUMwRzs7Ozs7SUFFMUcsbUNBQStCOzs7OztJQUUvQixrQ0FBOEI7Ozs7O0lBRTlCLG1DQUEwQjs7Ozs7SUFFMUIsNENBQTRDOzs7OztJQUU1QyxtQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogRGVzaWduIG9mIHRoZSBidXR0b24gKi9cbiAgQElucHV0KCkgZGVzaWduOiAnbWFpbicgfCAnc3Ryb2tlJyB8ICdiYXNpYycgfCAnd2hpdGUnID0gJ21haW4nO1xuICAvKiogQ29sb3IgcGFsZXR0ZSBvZiB0aGUgYnV0dG9uICovXG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JztcbiAgLyoqIFRleHQgbGFiZWwgZm9yIHRoZSBidXR0b24gICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIC8qKiBUeXBlIGF0dHJpYnV0ZSBvZiB0aGUgYnV0dG9uICovXG4gIEBJbnB1dCgpIHR5cGU6ICdzdWJtaXQnIHwgJ3Jlc2V0JyB8ICdidXR0b24nID0gJ3N1Ym1pdCc7XG4gIC8qKiBJY29uIG5hbWUgb2YgaWNvbiB0byBhcHBlYXIgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAvKiogSWNvbiBsaWJyYXJ5IHRvIHdoaXZoIHRoZSBpY29uIGJlbG9uZ3MgKi9cbiAgQElucHV0KCkgaWNvbkZvbnQ6ICdpbml0aWFmeScgfCAnZ2x5cGhpY29uJyB8XG4gICAgJ2ZvbnQtYXdlc29tZS1icmFuZCcgfCAnZm9udC1hd2Vzb21lLXNvbGlkJyB8ICdtYXRlcmlhbC1pY29ucycgfCAnbWF0ZXJpYWwtb3V0bGluZWQnID0gJ21hdGVyaWFsLWljb25zJztcbiAgLyoqIEFkZGl0aW9uYWwgY3NzIGNsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGJ1dHRvbiAqL1xuICBASW5wdXQoKSBjc3NDbGFzczogc3RyaW5nID0gJyc7XG4gIC8qKiBUZXh0IGZvciB0aGUgYnV0dG9uJ3MgdG9vbHRpcCAqL1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmcgPSAnJztcbiAgLyoqIERpc2FibGUgc3RhdGUgb2YgdGhlIGJ1dHRvbiAqL1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogSGlkZSBsYWJlbCBvbiBtb2JpbGUgc2NyZWVucyAgKi9cbiAgQElucHV0KCkgaGlkZUxhYmVsT25Nb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIE1ldGhvZCBjYWxsZWQgd2hlbiBidXR0b24gaXMgY2xpY2tlZCAqL1xuICBAT3V0cHV0KCkgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIGxldCAgY2xhc3NlcyA9IHRoaXMuZGVzaWduO1xuICAgIGlmICh0aGlzLmRlc2lnbiAhPT0gJ3doaXRlJyAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICBjbGFzc2VzICs9ICcgJyArIHRoaXMuY29sb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLmhpZGVMYWJlbE9uTW9iaWxlKSB7XG4gICAgICBjbGFzc2VzICs9ICcgaGlkZS1sYWJlbC1vbi1tb2JpbGUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jc3NDbGFzcykge1xuICAgICAgY2xhc3NlcyArPSAnICcgKyB0aGlzLmNzc0NsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19