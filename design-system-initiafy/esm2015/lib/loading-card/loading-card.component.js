/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LoadingCardComponent {
    constructor() {
        this.cssClass = '';
        this.size = 'std';
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get classes() {
        return this.cssClass + ' ' + this.size;
    }
}
LoadingCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-loading-card',
                template: "<div class=\"loading-card\" [ngClass]=\"classes\">\n  <div class=\"loading-card-content\">\n    <ng-content></ng-content>\n  </div>\n  <initiafy-progress-bar [isLoading]=\"isLoading\" class=\"loading-card-bar\"></initiafy-progress-bar>\n</div>",
                styles: [":host{width:100%;display:flex;align-items:center;justify-content:center}"]
            }] }
];
/** @nocollapse */
LoadingCardComponent.ctorParameters = () => [];
LoadingCardComponent.propDecorators = {
    cssClass: [{ type: Input }],
    size: [{ type: Input }],
    isLoading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingCardComponent.prototype.cssClass;
    /** @type {?} */
    LoadingCardComponent.prototype.size;
    /** @type {?} */
    LoadingCardComponent.prototype.isLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1jYXJkL2xvYWRpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFKUyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFnRCxLQUFLLENBQUM7UUFDMUQsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVwQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsK1BBQTRDOzthQUU3Qzs7Ozs7dUJBRUUsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFGTix3Q0FBdUI7O0lBQ3ZCLG9DQUFtRTs7SUFDbkUseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LWxvYWRpbmctY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNzc0NsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnc3RkJyB8ICdtZWRpdW0nIHwgJ2JpZycgfCAnZnVsbCcgPSAnc3RkJztcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmNzc0NsYXNzICsgJyAnICsgdGhpcy5zaXplO1xuICB9XG5cbn1cbiJdfQ==