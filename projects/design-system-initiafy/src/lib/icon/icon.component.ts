import { Component, Input } from '@angular/core';

@Component({
  selector: 'initiafy-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent {
  @Input() iconFont: 'glyphicon' | 'font-awesome' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' = 'material-icons';
  @Input() icon = '';

  constructor() {}

  getIconClasses() {
    switch (this.iconFont) {
      case 'font-awesome':
        return 'fa fa-' + this.icon;
      case 'font-awesome-brand':
        return 'fab fa-' + this.icon;
      case 'font-awesome-solid':
        return 'fas fa-' + this.icon;
      case 'glyphicon':
        return 'glyphicon glyphicon-' + this.icon;
      default:
        return 'material-icons';
    }
  }

  showText() {
    if (this.iconFont.includes('font-awesome')) {
      return false;
    }
    return true;
  }
}
