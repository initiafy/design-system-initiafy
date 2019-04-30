/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class IconComponent {
    constructor() {
        this.icon = '';
        this.iconFont = 'material-icons';
        this.size = 'small';
        this.cssClass = '';
        this.tooltip = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get iconClasses() {
        /** @type {?} */
        let classes;
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
    }
    /**
     * @return {?}
     */
    get showText() {
        /** @type {?} */
        let shouldShow;
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
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'initiafy-icon',
                template: "<i [ngClass]=\"iconClasses\" [class]=\"size\" [matTooltip]=\"tooltip\">\n  <ng-container *ngIf=\"showText\">{{ icon }}</ng-container>\n</i>",
                styles: [""]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    icon: [{ type: Input }],
    iconFont: [{ type: Input }],
    size: [{ type: Input }],
    cssClass: [{ type: Input }],
    tooltip: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxhQUFhO0lBUXhCO1FBUFMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FDbUQsZ0JBQWdCLENBQUM7UUFDNUUsU0FBSSxHQUEyQyxPQUFPLENBQUM7UUFDdkQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFHdEIsQ0FBQzs7OztJQUVELFFBQVEsS0FBSyxDQUFDOzs7O0lBRWQsSUFBSSxXQUFXOztZQUNULE9BQU87UUFDWCxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckIsS0FBSyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLE1BQU07YUFDUDtZQUNELEtBQUssb0JBQW9CLENBQUMsQ0FBQztnQkFDekIsT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxNQUFNO2FBQ1A7WUFDRCxLQUFLLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztnQkFDZixPQUFPLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEMsTUFBTTthQUNQO1lBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEdBQUcsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxHQUFHLGdCQUFnQixDQUFDO2FBQzVCO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsSUFBSSxRQUFROztZQUNOLFVBQW1CO1FBQ3ZCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQixLQUFLLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3pCLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07YUFDUDtZQUNELEtBQUssb0JBQW9CLENBQUMsQ0FBQztnQkFDekIsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDbkIsTUFBTTthQUNQO1lBQ0QsS0FBSyxXQUFXLENBQUMsQ0FBQztnQkFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNQO1lBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztnQkFDZixVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixNQUFNO2FBQ1A7WUFDRCxLQUFLLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3hCLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07YUFDUDtZQUNELE9BQU8sQ0FBQyxDQUFDO2dCQUNQLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDbkI7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHVKQUFvQzs7YUFFckM7Ozs7O21CQUdFLEtBQUs7dUJBQ0wsS0FBSzttQkFFTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUxOLDZCQUFtQjs7SUFDbkIsaUNBQ3FGOztJQUNyRiw2QkFBZ0U7O0lBQ2hFLGlDQUF1Qjs7SUFDdkIsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2luaXRpYWZ5LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uID0gJyc7XG4gIEBJbnB1dCgpIGljb25Gb250OiAnaW5pdGlhZnknIHwgJ2dseXBoaWNvbicgfCAnZm9udC1hd2Vzb21lLWJyYW5kJ1xuICAgIHwgJ2ZvbnQtYXdlc29tZS1zb2xpZCcgfCAnbWF0ZXJpYWwtaWNvbnMnIHwgJ21hdGVyaWFsLW91dGxpbmVkJyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbGVyJyB8ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdiaWcnID0gJ3NtYWxsJztcbiAgQElucHV0KCkgY3NzQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBnZXQgaWNvbkNsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXM7XG4gICAgc3dpdGNoICh0aGlzLmljb25Gb250KSB7XG4gICAgICBjYXNlICdmb250LWF3ZXNvbWUtYnJhbmQnOiB7XG4gICAgICAgIGNsYXNzZXMgPSAnZmFiIGZhLScgKyB0aGlzLmljb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZm9udC1hd2Vzb21lLXNvbGlkJzoge1xuICAgICAgICBjbGFzc2VzID0gJ2ZhcyBmYS0nICsgdGhpcy5pY29uO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dseXBoaWNvbic6IHtcbiAgICAgICAgY2xhc3NlcyA9ICdnbHlwaGljb24gZ2x5cGhpY29uLScgKyB0aGlzLmljb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnaW5pdGlhZnknOiB7XG4gICAgICAgIGNsYXNzZXMgPSAnaW5pdGlhZnktaWNvbnMgJyArIHRoaXMuaWNvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdtYXRlcmlhbC1vdXRsaW5lZCc6IHtcbiAgICAgICAgY2xhc3NlcyA9ICdtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAnICsgdGhpcy5pY29uO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY2xhc3NlcyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzICsgJyAnICsgdGhpcy5jc3NDbGFzcztcbiAgfVxuXG4gIGdldCBzaG93VGV4dCgpIHtcbiAgICBsZXQgc2hvdWxkU2hvdzogYm9vbGVhbjtcbiAgICBzd2l0Y2ggKHRoaXMuaWNvbkZvbnQpIHtcbiAgICAgIGNhc2UgJ2ZvbnQtYXdlc29tZS1icmFuZCc6IHtcbiAgICAgICAgc2hvdWxkU2hvdyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2ZvbnQtYXdlc29tZS1zb2xpZCc6IHtcbiAgICAgICAgc2hvdWxkU2hvdyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dseXBoaWNvbic6IHtcbiAgICAgICAgc2hvdWxkU2hvdyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnaW5pdGlhZnknOiB7XG4gICAgICAgIHNob3VsZFNob3cgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdtYXRlcmlhbC1vdXRsaW5lZCc6IHtcbiAgICAgICAgc2hvdWxkU2hvdyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgc2hvdWxkU2hvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG91bGRTaG93O1xuICB9XG59XG4iXX0=