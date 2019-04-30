/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function SearchItem() { }
if (false) {
    /** @type {?} */
    SearchItem.prototype.title;
    /** @type {?} */
    SearchItem.prototype.dataName;
}
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        /**
         * Placeholder text for the Input
         */
        this.placeholder = 'Enter search term';
        /**
         * Color Scheme for the component
         */
        this.color = 'primary';
        /**
         * Initial Value for the Input
         */
        this.value = 'Search term';
        /**
         * Text to display on expand button when component is collapsed
         */
        this.buttontext = 'Search';
        /**
         * Icon to display on button when component is collapsed
         */
        this.buttonicon = 'search';
        /**
         * Event triggered when the form is submitted
         */
        this.search = new EventEmitter();
        // Two Way Binding Properties
        this.collapsedValue = false;
        /**
         * Event triggered when the collapsed state of the component is toggled
         */
        this.collapsedChange = new EventEmitter();
    }
    Object.defineProperty(SearchBarComponent.prototype, "collapsed", {
        /** Whether the component is collapsed */
        get: /**
         * Whether the component is collapsed
         * @return {?}
         */
        function () {
            return this.collapsedValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.collapsedValue = value;
            this.collapsedChange.emit(this.collapsedValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SearchBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SearchBarComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.search.emit(this.value);
    };
    /**
     * @return {?}
     */
    SearchBarComponent.prototype.unCollapse = /**
     * @return {?}
     */
    function () {
        this.collapsed = false;
    };
    SearchBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-search-bar',
                    template: "<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"flex align-items-flex-end\">\n    <ng-template\n      #notCollapsedTemplate\n      [ngIf]=\"!collapsed\"\n      [ngIfElse]=\"collapsedTemplate\"\n    >\n      <mat-form-field\n        [color]=\"color\"\n        floatLabel=\"always\"\n        class=\"example-form-field\"\n      >\n        <input\n          matInput\n          type=\"text\"\n          [placeholder]=\"placeholder\"\n          [(ngModel)]=\"value\"\n          name=\"value\"\n        />\n        <button\n          mat-button\n          *ngIf=\"value\"\n          type=\"button\"\n          matSuffix\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"value = ''\"\n        >\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n      <initiafy-button\n        class=\"margin-bottom-20 flex align-items-end\"\n        [label]=\"buttontext\"\n        [color]=\"color\"\n        type=\"submit\"\n        aria-label=\"Search\"\n      >\n      </initiafy-button>\n    </ng-template>\n    <ng-template #collapsedTemplate>\n      <initiafy-button\n        class=\"margin-bottom-20 flex align-items-end\"\n        type=\"button\"\n        (callback)=\"unCollapse()\"\n        [icon]=\"buttonicon\"\n        [color]=\"color\"\n        aria-label=\"Search\"\n      >\n      </initiafy-button>\n    </ng-template>\n  </div>\n</form>\n",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    SearchBarComponent.ctorParameters = function () { return []; };
    SearchBarComponent.propDecorators = {
        placeholder: [{ type: Input }],
        color: [{ type: Input }],
        value: [{ type: Input }],
        buttontext: [{ type: Input }],
        buttonicon: [{ type: Input }],
        search: [{ type: Output }],
        collapsed: [{ type: Input }],
        collapsedChange: [{ type: Output }]
    };
    return SearchBarComponent;
}());
export { SearchBarComponent };
if (false) {
    /**
     * Placeholder text for the Input
     * @type {?}
     */
    SearchBarComponent.prototype.placeholder;
    /**
     * Color Scheme for the component
     * @type {?}
     */
    SearchBarComponent.prototype.color;
    /**
     * Initial Value for the Input
     * @type {?}
     */
    SearchBarComponent.prototype.value;
    /**
     * Text to display on expand button when component is collapsed
     * @type {?}
     */
    SearchBarComponent.prototype.buttontext;
    /**
     * Icon to display on button when component is collapsed
     * @type {?}
     */
    SearchBarComponent.prototype.buttonicon;
    /**
     * Event triggered when the form is submitted
     * @type {?}
     */
    SearchBarComponent.prototype.search;
    /** @type {?} */
    SearchBarComponent.prototype.collapsedValue;
    /**
     * Event triggered when the collapsed state of the component is toggled
     * @type {?}
     */
    SearchBarComponent.prototype.collapsedChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHL0UsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLDhCQUFpQjs7QUFHbkI7SUFnQ0U7Ozs7UUF6QlMsZ0JBQVcsR0FBRyxtQkFBbUIsQ0FBQzs7OztRQUVsQyxVQUFLLEdBQTRCLFNBQVMsQ0FBQzs7OztRQUUzQyxVQUFLLEdBQUcsYUFBYSxDQUFDOzs7O1FBRXRCLGVBQVUsR0FBRyxRQUFRLENBQUM7Ozs7UUFFdEIsZUFBVSxHQUFHLFFBQVEsQ0FBQzs7OztRQUVyQixXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7O1FBR3BFLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBTWIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWhDLENBQUM7SUFWaEIsc0JBQWEseUNBQVM7UUFEdEIseUNBQXlDOzs7OztRQUN6QztZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7OztRQUdELFVBQWMsS0FBSztZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BTkE7Ozs7SUFVRCxxQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBRWIscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGs0Q0FBMEM7O2lCQUUzQzs7Ozs7OEJBR0UsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLO3lCQUVMLE1BQU07NEJBS04sS0FBSztrQ0FJTCxNQUFNOztJQWlCVCx5QkFBQztDQUFBLEFBM0NELElBMkNDO1NBdENZLGtCQUFrQjs7Ozs7O0lBRTdCLHlDQUEyQzs7Ozs7SUFFM0MsbUNBQW9EOzs7OztJQUVwRCxtQ0FBK0I7Ozs7O0lBRS9CLHdDQUErQjs7Ozs7SUFFL0Isd0NBQStCOzs7OztJQUUvQixvQ0FBb0U7O0lBR3BFLDRDQUF1Qjs7Ozs7SUFNdkIsNkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoSXRlbSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGFOYW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LXNlYXJjaC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogUGxhY2Vob2xkZXIgdGV4dCBmb3IgdGhlIElucHV0ICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ0VudGVyIHNlYXJjaCB0ZXJtJztcbiAgLyoqIENvbG9yIFNjaGVtZSBmb3IgdGhlIGNvbXBvbmVudCAqL1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgPSAncHJpbWFyeSc7XG4gIC8qKiBJbml0aWFsIFZhbHVlIGZvciB0aGUgSW5wdXQgKi9cbiAgQElucHV0KCkgdmFsdWUgPSAnU2VhcmNoIHRlcm0nO1xuICAvKiogVGV4dCB0byBkaXNwbGF5IG9uIGV4cGFuZCBidXR0b24gd2hlbiBjb21wb25lbnQgaXMgY29sbGFwc2VkICovXG4gIEBJbnB1dCgpIGJ1dHRvbnRleHQgPSAnU2VhcmNoJztcbiAgLyoqIEljb24gdG8gZGlzcGxheSBvbiBidXR0b24gd2hlbiBjb21wb25lbnQgaXMgY29sbGFwc2VkICovXG4gIEBJbnB1dCgpIGJ1dHRvbmljb24gPSAnc2VhcmNoJztcbiAgLyoqIEV2ZW50IHRyaWdnZXJlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vIFR3byBXYXkgQmluZGluZyBQcm9wZXJ0aWVzXG4gIGNvbGxhcHNlZFZhbHVlID0gZmFsc2U7XG4gIC8qKiBXaGV0aGVyIHRoZSBjb21wb25lbnQgaXMgY29sbGFwc2VkICovXG4gIEBJbnB1dCgpIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkVmFsdWU7XG4gIH1cbiAgLyoqIEV2ZW50IHRyaWdnZXJlZCB3aGVuIHRoZSBjb2xsYXBzZWQgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBpcyB0b2dnbGVkICovXG4gIEBPdXRwdXQoKSBjb2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNldCBjb2xsYXBzZWQodmFsdWUpIHtcbiAgICB0aGlzLmNvbGxhcHNlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLmNvbGxhcHNlZFZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHVuQ29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgfVxufVxuIl19