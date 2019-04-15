import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'design-system-initiafy';

@Component({
  selector: 'app-snack-bar-documentation',
  templateUrl: './snack-bar-documentation.component.html',
  styleUrls: ['./snack-bar-documentation.component.scss']
})
export class SnackBarDocumentationComponent implements OnInit {
  public componentName = 'SnackBarService';
  public module = 'InitiafySnackBarModule';

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() { }

  public showHelp(): void {
    this.snackBarService.help('message', 'help action', () => { alert('hello'); });
  }

  public showSuccess(): void {
    this.snackBarService.success('congrats');
  }

  public showError(): void {
    this.snackBarService.error('oops!');
  }

}
