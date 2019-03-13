import { Component, OnInit, Input } from '@angular/core';
import {
  DocumentationService,
  Child
} from 'src/app/core/documentation.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  @Input() componentName: string;

  private componentDocs: Child;

  public properties: Child[] = [];
  public methods: Child[] = [];
  public constructors: Child[] = [];

  constructor(private documentationService: DocumentationService) {}

  ngOnInit() {
    this.componentDocs = this.documentationService.getDocs(this.componentName);
    if (!this.componentDocs) {
      console.error(
        `No doumentation found for the supplied Component Name of "${
          this.componentName
        }" ❗❗❗`
      );
    }
    this.properties = this.componentDocs.children.filter(
      x => x.kindString === 'Property'
    );
    this.methods = this.componentDocs.children.filter(
      x => x.kindString === 'Method'
    );
    this.constructors = this.componentDocs.children.filter(
      x => x.kindString === 'Constructor'
    );
    console.log(this.componentDocs);
  }
}
