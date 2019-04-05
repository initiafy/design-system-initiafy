import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  providers: [CommonService]
})
export class ColorsComponent {
  public title = 'icon.html';
  public componentName = 'IconComponent';
  public module = 'InitiafyIconModule';
  public showCode = false;

  constructor(private common: CommonService) {}

  copyToClipboard(item: string): void {
    this.common.copyToClipboard(item);
  }
}
