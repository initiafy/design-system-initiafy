/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/material/snack-bar";
export class SnackBarService {
    /**
     * @param {?} router
     * @param {?} snackBar
     */
    constructor(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        this.isAPersistentMessage = false;
        // clear alert message on route change
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationStart) {
                this.snackBar.dismiss();
            }
        }));
    }
    /**
     * @param {?} message
     * @param {?} helpActionLabel
     * @param {?} helpFunction
     * @return {?}
     */
    help(message, helpActionLabel, helpFunction) {
        this.isAPersistentMessage = false;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: '',
                message: message,
                closeButton: true,
                actionButtonLabel: helpActionLabel,
                actionButtonFunction: helpFunction
            },
            duration: 600000
        });
    }
    /**
     * @param {?} message
     * @return {?}
     */
    success(message) {
        this.isAPersistentMessage = false;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: 'done',
                message: message,
                closeButton: false
            },
            duration: 6000
        });
    }
    /**
     * @param {?} array
     * @return {?}
     */
    handleServerErrors(array) {
        /** @type {?} */
        let errorMessage = '';
        array.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => (errorMessage = e.message + '\n')));
        this.error(errorMessage);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    error(message) {
        this.isAPersistentMessage = true;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: 'warning',
                message: message,
                closeButton: true
            },
            duration: 600000
        });
    }
    /**
     * @return {?}
     */
    dismissPersistentMessages() {
        if (this.isAPersistentMessage) {
            this.snackBar.dismiss();
        }
    }
}
SnackBarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SnackBarService.ctorParameters = () => [
    { type: Router },
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarService.ngInjectableDef = i0.defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(i0.inject(i1.Router), i0.inject(i2.MatSnackBar)); }, token: SnackBarService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SnackBarService.prototype.isAPersistentMessage;
    /**
     * @type {?}
     * @private
     */
    SnackBarService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SnackBarService.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL3NuYWNrLWJhci9zbmFjay1iYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUtwRSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFMUIsWUFBb0IsTUFBYyxFQUFVLFFBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRHpELHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUVuQyxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixPQUFlLEVBQ2YsZUFBdUIsRUFDdkIsWUFBc0I7UUFFdEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO1lBQ2pELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsRUFBRTtnQkFDUixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLGlCQUFpQixFQUFFLGVBQWU7Z0JBQ2xDLG9CQUFvQixFQUFFLFlBQVk7YUFDbkM7WUFDRCxRQUFRLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFlO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUNqRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQWM7O1lBQzNCLFlBQVksR0FBRyxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxPQUFlO1FBQ25CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUNqRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJO2FBQ2xCO1lBQ0QsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN2QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7O1lBbEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLE1BQU07WUFDTixXQUFXOzs7Ozs7OztJQU9sQiwrQ0FBcUM7Ozs7O0lBQ3pCLGlDQUFzQjs7Ozs7SUFBRSxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNuYWNrQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zbmFjay1iYXIvc25hY2stYmFyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyU2VydmljZSB7XG4gIHByaXZhdGUgaXNBUGVyc2lzdGVudE1lc3NhZ2UgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlIG9uIHJvdXRlIGNoYW5nZVxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGVscChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgaGVscEFjdGlvbkxhYmVsOiBzdHJpbmcsXG4gICAgaGVscEZ1bmN0aW9uOiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICB0aGlzLmlzQVBlcnNpc3RlbnRNZXNzYWdlID0gZmFsc2U7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja0JhckNvbXBvbmVudCwge1xuICAgICAgZGF0YToge1xuICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgIGFjdGlvbkJ1dHRvbkxhYmVsOiBoZWxwQWN0aW9uTGFiZWwsXG4gICAgICAgIGFjdGlvbkJ1dHRvbkZ1bmN0aW9uOiBoZWxwRnVuY3Rpb25cbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjogNjAwMDAwXG4gICAgfSk7XG4gIH1cblxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuaXNBUGVyc2lzdGVudE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrQmFyQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGljb246ICdkb25lJyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IDYwMDBcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlcnZlckVycm9ycyhhcnJheTogRXJyb3JbXSk6IHZvaWQge1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcbiAgICBhcnJheS5mb3JFYWNoKGUgPT4gKGVycm9yTWVzc2FnZSA9IGUubWVzc2FnZSArICdcXG4nKSk7XG4gICAgdGhpcy5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0FQZXJzaXN0ZW50TWVzc2FnZSA9IHRydWU7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja0JhckNvbXBvbmVudCwge1xuICAgICAgZGF0YToge1xuICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIGNsb3NlQnV0dG9uOiB0cnVlXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IDYwMDAwMFxuICAgIH0pO1xuICB9XG5cbiAgZGlzbWlzc1BlcnNpc3RlbnRNZXNzYWdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0FQZXJzaXN0ZW50TWVzc2FnZSkge1xuICAgICAgdGhpcy5zbmFja0Jhci5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=