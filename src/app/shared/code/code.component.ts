import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() title: string;
  @ViewChild('markdown') markdown: MarkdownComponent;

  constructor(private common: CommonService) {}

  ngOnInit() {}

  copyToClipboard(): void {
    this.common.copyToClipboard(this.markdown.element.nativeElement.innerText);
  }
}
