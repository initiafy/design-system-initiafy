import { Component, NgModule } from '@angular/core';
import { YesOrNoDialogData, YesOrNoService } from 'design-system-initiafy';

@Component({})
export class ExampleComponent {

    constructor(private yesOrNoService: YesOrNoService) {}

    public handleButtonClick() {
        const config: YesOrNoDialogData = {
            message: 'are you sure?',
            title: '',
            yesButtonLabel: 'Yes',
            noButtonLabel: 'Cancel'
        }
        this.yesOrNoService.show(config).afterClosed().subscribe(result => {
            if (result) {
                console.log('confirmation received');
            } else {
                console.log('action cancelled');
            }
        });
    }
}

