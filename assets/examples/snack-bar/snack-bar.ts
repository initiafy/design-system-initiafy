import { Component } from '@angular/core';
import { SnackBarService } from 'design-system-initiafy';

@Component({})
export class ExampleComponent {

    constructor(private snackBarService: SnackBarService) { }

    public showHelp(): void {
        this.snackBarService.help('message', 'help action', () => { alert('help is on the way'); });
    }

    public showSuccess(): void {
        this.snackBarService.success('congrats');
    }

    public showError(): void {
        this.snackBarService.error('oops!');
    }
}

