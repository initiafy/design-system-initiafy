import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  providers: [ CommonService ]
})
export class ColorsComponent implements OnInit {
  showCode: boolean = false;

  constructor(
    private common : CommonService
  ) { 
  }

  ngOnInit() {
  }

  copyToClipboard(item: string): void {
    this.common.copyToClipboard(item);
  }

}
