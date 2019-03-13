import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @ViewChild('codeExpansionPanel') accordion: MatExpansionPanel;
  @Input() title: string;
  showCode: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.accordion);
    this.accordion.open();
  }

}
