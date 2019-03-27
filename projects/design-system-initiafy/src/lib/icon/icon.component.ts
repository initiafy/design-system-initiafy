import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'initiafy-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() icon = '';
  @Input() iconFont: 'initiafy' | 'glyphicon' | 'font-awesome' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' = 'material-icons';
  @Input() size: 'small' | 'medium' | 'big' = 'small';

  private _getIconClasses: string;
  private _showText: boolean;

  get iconClasses() {
    return this._getIconClasses;
  }

  get text() {
    return this._showText;
  }

  constructor() {
  }

  ngOnInit() {
    this._getIconClasses = this.getIconClasses();
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
      default:
        return 'material-icons';
    }
  }

  private showText() {
    if (
        this.iconFont.includes('font-awesome') ||
        this.iconFont.includes('initiafy')
      ) {
      return false;
    }
    return true;
  }
}
