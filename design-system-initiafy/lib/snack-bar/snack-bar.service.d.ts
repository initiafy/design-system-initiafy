import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
export declare class SnackBarService {
    private router;
    private snackBar;
    private isAPersistentMessage;
    constructor(router: Router, snackBar: MatSnackBar);
    help(message: string, helpActionLabel: string, helpFunction: Function): void;
    success(message: string): void;
    handleServerErrors(array: Error[]): void;
    error(message: string): void;
    dismissPersistentMessages(): void;
}
