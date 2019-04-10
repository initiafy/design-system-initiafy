import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;
  @Input() checked = true;

  constructor() { }

  ngOnInit() {
  }

}
