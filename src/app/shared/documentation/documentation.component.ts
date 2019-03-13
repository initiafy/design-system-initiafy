import { Component, OnInit, Input } from '@angular/core';
import {
  DocumentationService,
  Child,
  Type
} from 'src/app/core/documentation/documentation.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'defaultValue'];
  @Input() componentName: string;

  private componentDocs: Child;

  public selector = '';
  public properties: Child[] = [];
  public inputs: Child[] = [];
  public outputs: Child[] = [];
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
    this.inputs = this.properties.filter(x => {
      return x.decorators.some(e => e.name === 'Input');
    });
    this.outputs = this.properties.filter(x => {
      return x.decorators.some(e => e.name === 'Output');
    });
    this.methods = this.componentDocs.children.filter(
      x => x.kindString === 'Method'
    );
    this.constructors = this.componentDocs.children.filter(
      x => x.kindString === 'Constructor'
    );
    const { obj } = this.componentDocs.decorators[0].arguments;
    const escaped = this.jsonEscape(obj);
    const parsed = JSON.parse(escaped);
    this.selector = parsed.selector;
  }
  jsonEscape = (str: string) => {
    return str
      .replace(/(\r\n|\n|\r)/gm, '')
      .replace(/'/g, '"')
      .replace(/:/g, '":')
      .replace(/  /g, ' "');
  }
  getTypeString = (type: Type) => {
    if (type.name) {
      return type.name;
    }
    let str = '';
    type.types.forEach((element, index) => {
      if (index > 0) {
        str = str + ' | ';
      }
      str = str + '\"' + element.value + '\"';
    });
    return str;
  }
}
