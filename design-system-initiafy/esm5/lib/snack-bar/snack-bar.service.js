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
var SnackBarService = /** @class */ (function () {
    function SnackBarService(router, snackBar) {
        var _this = this;
        this.router = router;
        this.snackBar = snackBar;
        this.isAPersistentMessage = false;
        // clear alert message on route change
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart) {
                _this.snackBar.dismiss();
            }
        }));
    }
    /**
     * @param {?} message
     * @param {?} helpActionLabel
     * @param {?} helpFunction
     * @return {?}
     */
    SnackBarService.prototype.help = /**
     * @param {?} message
     * @param {?} helpActionLabel
     * @param {?} helpFunction
     * @return {?}
     */
    function (message, helpActionLabel, helpFunction) {
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
    };
    /**
     * @param {?} message
     * @return {?}
     */
    SnackBarService.prototype.success = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.isAPersistentMessage = false;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: 'done',
                message: message,
                closeButton: false
            },
            duration: 6000
        });
    };
    /**
     * @param {?} array
     * @return {?}
     */
    SnackBarService.prototype.handleServerErrors = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var errorMessage = '';
        array.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return (errorMessage = e.message + '\n'); }));
        this.error(errorMessage);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    SnackBarService.prototype.error = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.isAPersistentMessage = true;
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                icon: 'warning',
                message: message,
                closeButton: true
            },
            duration: 600000
        });
    };
    /**
     * @return {?}
     */
    SnackBarService.prototype.dismissPersistentMessages = /**
     * @return {?}
     */
    function () {
        if (this.isAPersistentMessage) {
            this.snackBar.dismiss();
        }
    };
    SnackBarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SnackBarService.ctorParameters = function () { return [
        { type: Router },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ SnackBarService.ngInjectableDef = i0.defineInjectable({ factory: function SnackBarService_Factory() { return new SnackBarService(i0.inject(i1.Router), i0.inject(i2.MatSnackBar)); }, token: SnackBarService, providedIn: "root" });
    return SnackBarService;
}());
export { SnackBarService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXNpZ24tc3lzdGVtLWluaXRpYWZ5LyIsInNvdXJjZXMiOlsibGliL3NuYWNrLWJhci9zbmFjay1iYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUVwRTtJQUtFLHlCQUFvQixNQUFjLEVBQVUsUUFBcUI7UUFBakUsaUJBT0M7UUFQbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWE7UUFEekQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBRW5DLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2hDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELDhCQUFJOzs7Ozs7SUFBSixVQUNFLE9BQWUsRUFDZixlQUF1QixFQUN2QixZQUFzQjtRQUV0QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7WUFDakQsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsaUJBQWlCLEVBQUUsZUFBZTtnQkFDbEMsb0JBQW9CLEVBQUUsWUFBWTthQUNuQztZQUNELFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQWU7UUFDckIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO1lBQ2pELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsNENBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQWM7O1lBQzNCLFlBQVksR0FBRyxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELCtCQUFLOzs7O0lBQUwsVUFBTSxPQUFlO1FBQ25CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUNqRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJO2FBQ2xCO1lBQ0QsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG1EQUF5Qjs7O0lBQXpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7O2dCQWxFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLE1BQU07Z0JBQ04sV0FBVzs7OzBCQUZwQjtDQXdFQyxBQW5FRCxJQW1FQztTQWhFWSxlQUFlOzs7Ozs7SUFDMUIsK0NBQXFDOzs7OztJQUN6QixpQ0FBc0I7Ozs7O0lBQUUsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTbmFja0JhckNvbXBvbmVudCB9IGZyb20gJy4vc25hY2stYmFyL3NuYWNrLWJhci5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhclNlcnZpY2Uge1xuICBwcml2YXRlIGlzQVBlcnNpc3RlbnRNZXNzYWdlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG4gICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZSBvbiByb3V0ZSBjaGFuZ2VcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICB0aGlzLnNuYWNrQmFyLmRpc21pc3MoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhlbHAoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGhlbHBBY3Rpb25MYWJlbDogc3RyaW5nLFxuICAgIGhlbHBGdW5jdGlvbjogRnVuY3Rpb25cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5pc0FQZXJzaXN0ZW50TWVzc2FnZSA9IGZhbHNlO1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tCYXJDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWNvbjogJycsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIGNsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgICBhY3Rpb25CdXR0b25MYWJlbDogaGVscEFjdGlvbkxhYmVsLFxuICAgICAgICBhY3Rpb25CdXR0b25GdW5jdGlvbjogaGVscEZ1bmN0aW9uXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IDYwMDAwMFxuICAgIH0pO1xuICB9XG5cbiAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQVBlcnNpc3RlbnRNZXNzYWdlID0gZmFsc2U7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja0JhckNvbXBvbmVudCwge1xuICAgICAgZGF0YToge1xuICAgICAgICBpY29uOiAnZG9uZScsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiA2MDAwXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZXJ2ZXJFcnJvcnMoYXJyYXk6IEVycm9yW10pOiB2b2lkIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgYXJyYXkuZm9yRWFjaChlID0+IChlcnJvck1lc3NhZ2UgPSBlLm1lc3NhZ2UgKyAnXFxuJykpO1xuICAgIHRoaXMuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuaXNBUGVyc2lzdGVudE1lc3NhZ2UgPSB0cnVlO1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tCYXJDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBjbG9zZUJ1dHRvbjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiA2MDAwMDBcbiAgICB9KTtcbiAgfVxuXG4gIGRpc21pc3NQZXJzaXN0ZW50TWVzc2FnZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBUGVyc2lzdGVudE1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuIl19