/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDialogComponent } from './yes-or-no/yes-or-no.component';
import { YesOrNoService } from './yes-or-no.service';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { InitiafyIconModule } from '../icon/icon.module';
export class InitiafyYesOrNoModule {
}
InitiafyYesOrNoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    YesOrNoDialogComponent
                ],
                imports: [
                    CommonModule,
                    InitiafyIconModule,
                    MatButtonModule,
                    MatDialogModule
                ],
                exports: [
                    YesOrNoDialogComponent
                ],
                providers: [
                    YesOrNoService
                ],
                entryComponents: [
                    YesOrNoDialogComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW9yLW5vLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Rlc2lnbi1zeXN0ZW0taW5pdGlhZnkvIiwic291cmNlcyI6WyJsaWIveWVzLW9yLW5vL3llcy1vci1uby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBc0J6RCxNQUFNLE9BQU8scUJBQXFCOzs7WUFwQmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGNBQWM7aUJBQ2Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgWWVzT3JOb0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4veWVzLW9yLW5vL3llcy1vci1uby5jb21wb25lbnQnO1xuaW1wb3J0IHsgWWVzT3JOb1NlcnZpY2UgfSBmcm9tICcuL3llcy1vci1uby5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgSW5pdGlhZnlJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFllc09yTm9EaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJbml0aWFmeUljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgWWVzT3JOb0RpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBZZXNPck5vU2VydmljZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBZZXNPck5vRGlhbG9nQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5pdGlhZnlZZXNPck5vTW9kdWxlIHsgfVxuIl19