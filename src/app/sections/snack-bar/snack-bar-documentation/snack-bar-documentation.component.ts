import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'projects/design-system-initiafy/src/public_api';

@Component({
  selector: 'app-snack-bar-documentation',
  templateUrl: './snack-bar-documentation.component.html',
  styleUrls: ['./snack-bar-documentation.component.scss']
})
export class SnackBarDocumentationComponent implements OnInit {
  public componentName = 'SnackBarService';
  public module = 'InitiafySnackBarModule';
  public classes = ['Error'];

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() { }

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
