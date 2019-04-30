import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../services/icons.service';
import { Icons } from 'src/app/models/icons';
import { ClipboardService } from 'src/app/core/clipboard/clipboard.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  providers: [IconsService]
})
export class IconsComponent implements OnInit {
  public componentName = 'IconComponent';
  public module = 'InitiafyIconModule';
  public showCode: boolean = false;
  public iconsList: Array<Array<Icons>> = [];

  constructor(
    private iconsService: IconsService,
    private clipboard: ClipboardService
  ) {}

  ngOnInit() {
    this.getIcons();
  }

  copyToClipboard(icon: string, iconFont: string): void {
    this.clipboard.copyToClipboard(
      `<initiafy-icon icon="${icon}"${iconFont &&
        ` iconFont="${iconFont}"`}></initiafy-icon>`
    );
  }

  getIcons() {
    this.iconsList.push(this.iconsService.getIcons('done', ''));
    this.iconsList.push(this.iconsService.getIcons('remove', ''));
    this.iconsList.push(this.iconsService.getIcons('arrow_back', ''));
    this.iconsList.push(this.iconsService.getIcons('arrow_forward', ''));
    this.iconsList.push(this.iconsService.getIcons('chevron_left', ''));
    this.iconsList.push(this.iconsService.getIcons('chevron_right', ''));
    this.iconsList.push(this.iconsService.getIcons('close', ''));
    this.iconsList.push(this.iconsService.getIcons('edit', ''));
    this.iconsList.push(this.iconsService.getIcons('delete_outline', ''));
    this.iconsList.push(this.iconsService.getIcons('input', ''));
    this.iconsList.push(this.iconsService.getIcons('help_outline', ''));
    this.iconsList.push(this.iconsService.getIcons('more_vert', ''));
    this.iconsList.push(this.iconsService.getIcons('list', ''));
    this.iconsList.push(this.iconsService.getIcons('search', ''));
    this.iconsList.push(this.iconsService.getIcons('business', ''));
    this.iconsList.push(this.iconsService.getIcons('access_time', ''));
    this.iconsList.push(this.iconsService.getIcons('cancel', ''));
    this.iconsList.push(this.iconsService.getIcons('vpn_key', ''));
    this.iconsList.push(this.iconsService.getIcons('cloud_download', ''));
    this.iconsList.push(this.iconsService.getIcons('person_add', ''));
    this.iconsList.push(this.iconsService.getIcons('person', ''));
    this.iconsList.push(this.iconsService.getIcons('notifications_none', ''));
    this.iconsList.push(this.iconsService.getIcons('address-card', 'font-awesome-solid'));
    this.iconsList.push(this.iconsService.getIcons('behalf', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('dotlogo', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('qualification', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('number', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('characterbox', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('home', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('person', 'material-outlined'));
  }
}
