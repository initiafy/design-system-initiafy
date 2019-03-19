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
  displayedInputsColumns: string[] = [
    'name',
    'type',
    'defaultValue',
    'comment'
  ];
  displayedOutputsColumns: string[] = ['name', 'type', 'typeArguments', 'comment'];
  displayedTwoWayColumns: string[] = ['name', 'type', 'comment'];
  @Input() componentName: string;
  @Input() module: string;
  @Input() codeTitle: string;

  private componentDocs: Child;

  public selector = '';
  public properties: Child[] = [];
  public inputs: Child[] = [];
  public outputs: Child[] = [];
  public twoWayBound: Child[] = [];
  public methods: Child[] = [];
  public constructors: Child[] = [];

  constructor(private documentationService: DocumentationService) {}

  ngOnInit() {
    this.componentDocs = this.documentationService.getDocs(this.componentName);
    if (!this.componentDocs) {
      console.error(
        `No doumentation found for the supplied Component Name of "${
          this.componentName
        }"`
      );
    }
    this.properties = [];
    this.methods = [];
    this.constructors = [];
    this.twoWayBound = [];
    const { children } = this.componentDocs;
    children.forEach(e => {
      if (e.kindString === 'Property') {
        this.properties.push(e);
      } else if (e.kindString === 'Method') {
        this.methods.push(e);
      } else if (e.kindString === 'Constructor') {
        this.constructors.push(e);
      } else if (
        e.kindString === 'Accessor' &&
        e.getSignature &&
        e.setSignature
      ) {
        this.twoWayBound.push(e);
      }
    });
    this.inputs = [];
    this.outputs = [];
    this.properties.forEach(e => {
      if (e.decorators && e.decorators.some(z => z.name === 'Input')) {
        this.inputs.push(e);
      } else if (e.decorators && e.decorators.some(z => z.name === 'Output')) {
        this.outputs.push(e);
      }
    });
    const { obj } = this.componentDocs.decorators[0].arguments;
    const escaped = this.jsonEscape(obj);
    const parsed = JSON.parse(escaped);
    this.selector = parsed.selector;
  }
  jsonEscape(str: string): string {
    return str
      .replace(/(\r\n|\n|\r)/gm, '')
      .replace(/'/g, '"')
      .replace(/:/g, '":')
      .replace(/  /g, ' "');
  }
  getTypeString(type: Type): string {
    if (type.name) {
      return type.name;
    }
    let str = '';
    type.types.forEach((element, index) => {
      if (index > 0) {
        str = str + ' | ';
      }
      str = str + '"' + element.value + '"';
    });
    return str;
  }
  getTwoWayTypeString(obj: Child) {
    return obj.getSignature[0].type.name;
  }
  getArguementString(type: Type): string {
    let str = '';
    type.typeArguments.forEach((element, index) => {
      if (index > 0) {
        str = str + ', ';
      }
      str = str + element.name;
    });
    return str;
  }
}
