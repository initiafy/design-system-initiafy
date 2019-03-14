import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  providers: [CommonService]
})
export class ColorsComponent implements OnInit {
  showCode = false;

  constructor(private common: CommonService) {}

  ngOnInit() {}

  copyToClipboard(item: string): void {
    this.common.copyToClipboard(item);
  }
}
