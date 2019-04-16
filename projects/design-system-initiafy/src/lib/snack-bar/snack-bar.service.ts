import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private isAPersistentMessage = false;
  constructor(private router: Router, private snackBar: MatSnackBar) {
    // clear alert message on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.snackBar.dismiss();
      }
    });
  }

  help(
    message: string,
    helpActionLabel: string,
    helpFunction: Function
  ): void {
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

  success(message: string) {
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

  handleServerErrors(array: Error[]): void {
    let errorMessage = '';
    array.forEach(e => (errorMessage = e.message + '\n'));
    this.error(errorMessage);
  }

  error(message: string) {
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

  dismissPersistentMessages(): void {
    if (this.isAPersistentMessage) {
      this.snackBar.dismiss();
    }
  }
}
