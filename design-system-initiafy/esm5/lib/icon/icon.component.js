/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.icon = '';
        this.iconFont = 'material-icons';
        this.size = 'small';
        this.cssClass = '';
        this.tooltip = '';
    }
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(IconComponent.prototype, "iconClasses", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes;
            switch (this.iconFont) {
                case 'font-awesome-brand': {
                    classes = 'fab fa-' + this.icon;
                    break;
                }
                case 'font-awesome-solid': {
                    classes = 'fas fa-' + this.icon;
                    break;
                }
                case 'glyphicon': {
                    classes = 'glyphicon glyphicon-' + this.icon;
                    break;
                }
                case 'initiafy': {
                    classes = 'initiafy-icons ' + this.icon;
                    break;
                }
                case 'material-outlined': {
                    classes = 'material-icons-outlined ' + this.icon;
                    break;
                }
                default: {
                    classes = 'material-icons';
                }
            }
            return classes + ' ' + this.cssClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "showText", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var shouldShow;
            switch (this.iconFont) {
                case 'font-awesome-brand': {
                    shouldShow = false;
                    break;
                }
                case 'font-awesome-solid': {
                    shouldShow = false;
                    break;
                }
                case 'glyphicon': {
                    shouldShow = true;
                    break;
                }
                case 'initiafy': {
                    shouldShow = false;
                    break;
                }
                case 'material-outlined': {
                    shouldShow = false;
                    break;
                }
                default: {
                    shouldShow = true;
                }
            }
            return shouldShow;
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'initiafy-icon',
                    template: "<i [ngClass]=\"iconClasses\" [class]=\"size\" [matTooltip]=\"tooltip\">\n  <ng-container *ngIf=\"showText\">{{ icon }}</ng-container>\n</i>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return []; };
    IconComponent.propDecorators = {
        icon: [{ type: Input }],
        iconFont: [{ type: Input }],
        size: [{ type: Input }],
        cssClass: [{ type: Input }],
        tooltip: [{ type: Input }]
    };
    return IconComponent;
}());
export { IconComponent };
if (false) {
    /** @type {?} */
    IconComponent.prototype.icon;
    /** @type {?} */
    IconComponent.prototype.iconFont;
    /** @type {?} */
    IconComponent.prototype.size;
    /** @type {?} */
    IconComponent.prototype.cssClass;
    /** @type {?} */
    IconComponent.prototype.tooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBY0U7UUFQUyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUNtRCxnQkFBZ0IsQ0FBQztRQUM1RSxTQUFJLEdBQTJDLE9BQU8sQ0FBQztRQUN2RCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUd0QixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSLGNBQWEsQ0FBQztJQUVkLHNCQUFJLHNDQUFXOzs7O1FBQWY7O2dCQUNNLE9BQU87WUFDWCxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLEtBQUssb0JBQW9CLENBQUMsQ0FBQztvQkFDekIsT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNoQyxNQUFNO2lCQUNQO2dCQUNELEtBQUssb0JBQW9CLENBQUMsQ0FBQztvQkFDekIsT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNoQyxNQUFNO2lCQUNQO2dCQUNELEtBQUssV0FBVyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM3QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssVUFBVSxDQUFDLENBQUM7b0JBQ2YsT0FBTyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEdBQUcsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDakQsTUFBTTtpQkFDUDtnQkFDRCxPQUFPLENBQUMsQ0FBQztvQkFDUCxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7aUJBQzVCO2FBQ0Y7WUFDRCxPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFROzs7O1FBQVo7O2dCQUNNLFVBQW1CO1lBQ3ZCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDckIsS0FBSyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN6QixVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUNuQixNQUFNO2lCQUNQO2dCQUNELEtBQUssb0JBQW9CLENBQUMsQ0FBQztvQkFDekIsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDbkIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLFdBQVcsQ0FBQyxDQUFDO29CQUNoQixVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixNQUFNO2lCQUNQO2dCQUNELEtBQUssVUFBVSxDQUFDLENBQUM7b0JBQ2YsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDbkIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hCLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ25CLE1BQU07aUJBQ1A7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOztnQkE3RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1SkFBb0M7O2lCQUVyQzs7Ozs7dUJBR0UsS0FBSzsyQkFDTCxLQUFLO3VCQUVMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQWtFUixvQkFBQztDQUFBLEFBOUVELElBOEVDO1NBeEVZLGFBQWE7OztJQUN4Qiw2QkFBbUI7O0lBQ25CLGlDQUNxRjs7SUFDckYsNkJBQWdFOztJQUNoRSxpQ0FBdUI7O0lBQ3ZCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0aWFmeS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWNvbiA9ICcnO1xuICBASW5wdXQoKSBpY29uRm9udDogJ2luaXRpYWZ5JyB8ICdnbHlwaGljb24nIHwgJ2ZvbnQtYXdlc29tZS1icmFuZCdcbiAgICB8ICdmb250LWF3ZXNvbWUtc29saWQnIHwgJ21hdGVyaWFsLWljb25zJyB8ICdtYXRlcmlhbC1vdXRsaW5lZCcgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBASW5wdXQoKSBzaXplOiAnc21hbGxlcicgfCAnc21hbGwnIHwgJ21lZGl1bScgfCAnYmlnJyA9ICdzbWFsbCc7XG4gIEBJbnB1dCgpIGNzc0NsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHRvb2x0aXAgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgZ2V0IGljb25DbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzO1xuICAgIHN3aXRjaCAodGhpcy5pY29uRm9udCkge1xuICAgICAgY2FzZSAnZm9udC1hd2Vzb21lLWJyYW5kJzoge1xuICAgICAgICBjbGFzc2VzID0gJ2ZhYiBmYS0nICsgdGhpcy5pY29uO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2ZvbnQtYXdlc29tZS1zb2xpZCc6IHtcbiAgICAgICAgY2xhc3NlcyA9ICdmYXMgZmEtJyArIHRoaXMuaWNvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnbHlwaGljb24nOiB7XG4gICAgICAgIGNsYXNzZXMgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi0nICsgdGhpcy5pY29uO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2luaXRpYWZ5Jzoge1xuICAgICAgICBjbGFzc2VzID0gJ2luaXRpYWZ5LWljb25zICcgKyB0aGlzLmljb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbWF0ZXJpYWwtb3V0bGluZWQnOiB7XG4gICAgICAgIGNsYXNzZXMgPSAnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJyArIHRoaXMuaWNvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNsYXNzZXMgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcyArICcgJyArIHRoaXMuY3NzQ2xhc3M7XG4gIH1cblxuICBnZXQgc2hvd1RleHQoKSB7XG4gICAgbGV0IHNob3VsZFNob3c6IGJvb2xlYW47XG4gICAgc3dpdGNoICh0aGlzLmljb25Gb250KSB7XG4gICAgICBjYXNlICdmb250LWF3ZXNvbWUtYnJhbmQnOiB7XG4gICAgICAgIHNob3VsZFNob3cgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdmb250LWF3ZXNvbWUtc29saWQnOiB7XG4gICAgICAgIHNob3VsZFNob3cgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnbHlwaGljb24nOiB7XG4gICAgICAgIHNob3VsZFNob3cgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2luaXRpYWZ5Jzoge1xuICAgICAgICBzaG91bGRTaG93ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbWF0ZXJpYWwtb3V0bGluZWQnOiB7XG4gICAgICAgIHNob3VsZFNob3cgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHNob3VsZFNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hvdWxkU2hvdztcbiAgfVxufVxuIl19