/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ActionBarComponent {
    constructor() {
        this.cssClass = '';
        this.content = '';
        this.isLoading = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get cssClasses() {
        /** @type {?} */
        let _cssClasses = this.cssClass;
        if (this.content === 'end') {
            _cssClasses = _cssClasses + ' justify-content-end';
        }
        return _cssClasses;
    }
}
ActionBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-action-bar',
                template: "<div class=\"action-bar\" [ngClass]=\"cssClasses\">\n  <ng-content></ng-content>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ActionBarComponent.ctorParameters = () => [];
ActionBarComponent.propDecorators = {
    cssClass: [{ type: Input }],
    content: [{ type: Input }],
    isLoading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ActionBarComponent.prototype.cssClass;
    /** @type {?} */
    ActionBarComponent.prototype.content;
    /** @type {?} */
    ActionBarComponent.prototype.isLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFLN0I7UUFKUyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFFUixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVOztZQUNSLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQzFCLFdBQVcsR0FBRyxXQUFXLEdBQUksc0JBQXNCLENBQUM7U0FDckQ7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9HQUEwQzs7YUFFM0M7Ozs7O3VCQUVFLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRk4sc0NBQXVCOztJQUN2QixxQ0FBc0I7O0lBQ3RCLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0aWFmeS1hY3Rpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3NzQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgY29udGVudCA9ICcnO1xuICBASW5wdXQoKSBpc0xvYWRpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgbGV0IF9jc3NDbGFzc2VzID0gdGhpcy5jc3NDbGFzcztcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSAnZW5kJykge1xuICAgICAgX2Nzc0NsYXNzZXMgPSBfY3NzQ2xhc3NlcyArICAnIGp1c3RpZnktY29udGVudC1lbmQnO1xuICAgIH1cbiAgICByZXR1cm4gX2Nzc0NsYXNzZXM7XG4gIH1cblxufVxuIl19