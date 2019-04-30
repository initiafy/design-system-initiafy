/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarService } from './snack-bar.service';
import { MatSnackBarModule } from '@angular/material';
import { InitiafyIconModule } from '../icon/icon.module';
import { InitiafyButtonModule } from '../button/button.module';
var InitiafySnackBarModule = /** @class */ (function () {
    function InitiafySnackBarModule() {
    }
    InitiafySnackBarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SnackBarComponent],
                    imports: [
                        CommonModule,
                        MatSnackBarModule,
                        InitiafyIconModule,
                        InitiafyButtonModule
                    ],
                    providers: [SnackBarService],
                    entryComponents: [SnackBarComponent]
                },] }
    ];
    return InitiafySnackBarModule;
}());
export { InitiafySnackBarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIvc25hY2stYmFyL3NuYWNrLWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQUFBO0lBV3NDLENBQUM7O2dCQVh0QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ3JDOztJQUNxQyw2QkFBQztDQUFBLEFBWHZDLElBV3VDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU25hY2tCYXJDb21wb25lbnQgfSBmcm9tICcuL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBJbml0aWFmeUljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEluaXRpYWZ5QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTbmFja0JhckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgSW5pdGlhZnlJY29uTW9kdWxlLFxuICAgIEluaXRpYWZ5QnV0dG9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1NuYWNrQmFyU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NuYWNrQmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJbml0aWFmeVNuYWNrQmFyTW9kdWxlIHsgfVxuIl19