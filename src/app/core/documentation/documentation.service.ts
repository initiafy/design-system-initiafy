import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Documentation {
  name: string;
  kind: number;
  id: number;
  groups: Group[];
  flags: Flags;
  children: Child[];
}

export interface Group {
  title: string;
  kind: number;
  children: number[];
}

export interface Flags {
  isExported?: boolean;
}

export interface Child {
  children: Child[];
  decorators: Decorator[];
  flags: Flags;
  groups: Group[];
  id: number;
  kind: number;
  kindString: string;
  name: string;
  sources: Source[];
}

export interface Decorator {
  arguments: Arguements;
  name: string;
  type: Type;
}
export interface Arguements {
  obj: string;
}
export interface Type {
  type: string;
  name: string;
}

export interface Source {
  character: number;
  fileName: string;
  line: number;
}

@Injectable()
export class DocumentationService {
  private _documentation: Documentation;
  constructor(private http: HttpClient) {}
  load(): Promise<any> {
    this._documentation = null;
    return this.http
      .get<Documentation>('/assets/docs.json')
      .pipe(map((res: Documentation) => res))
      .toPromise()
      .then((data: any) => (this._documentation = data))
      .catch((err: any) => Promise.resolve());
  }
  get startupData(): any {
    return this._documentation;
  }
  public getDocs(componentName: string): Child {
    return this.startupData.children.filter(x => x.name === componentName)[0];
  }
}
