import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'initiafy-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() icon = '';
  @Input() iconFont: 'initiafy' | 'glyphicon' | 'font-awesome' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' | 'material-outlined' = 'material-icons';
  @Input() size: 'smaller' | 'small' | 'medium' | 'big' = 'small';
  @Input() cssClass: string = '';
  @Input() tooltip: string = '';

  private _classes: string;
  private _showText: boolean;

  get classes() {
    return this._classes;
  }

  get text() {
    return this._showText;
  }

  constructor() {
  }

  ngOnInit() {
    this._classes = this.getIconClasses() + ' ' + this.cssClass;
    this._showText = this.showText();
  }

  private getIconClasses() {
    switch (this.iconFont) {
      case 'font-awesome':
        return 'fa fa-' + this.icon;
      case 'font-awesome-brand':
        return 'fab fa-' + this.icon;
      case 'font-awesome-solid':
        return 'fas fa-' + this.icon;
      case 'glyphicon':
        return 'glyphicon glyphicon-' + this.icon;
      case 'initiafy':
        return 'initiafy-icons ' + this.icon;
      case 'material-outlined':
        return 'material-icons-outlined ' + this.icon;
      default:
        return 'material-icons';
    }
  }

  private showText() {
    if (this.iconFont) {
      if (
        this.iconFont.includes('font-awesome') ||
        this.iconFont.includes('initiafy')
      ) {
        return false;
      }
    }
    return true;
  }
}
