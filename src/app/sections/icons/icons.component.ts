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
    this.iconsList.push(this.iconsService.getIcons('add', ''));
    this.iconsList.push(this.iconsService.getIcons('arrow_drop_down', ''));
    this.iconsList.push(this.iconsService.getIcons('block', ''));
    this.iconsList.push(this.iconsService.getIcons('characterbox', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('check_box', ''));
    this.iconsList.push(this.iconsService.getIcons('check_circle', ''));
    this.iconsList.push(this.iconsService.getIcons('chevron_right', ''));
    this.iconsList.push(this.iconsService.getIcons('cloud_upload', ''));
    this.iconsList.push(this.iconsService.getIcons('credit_card', ''));
    this.iconsList.push(this.iconsService.getIcons('delete', ''));
    this.iconsList.push(this.iconsService.getIcons('description', ''));
    this.iconsList.push(this.iconsService.getIcons('dotlogo', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('done', ''));
    this.iconsList.push(this.iconsService.getIcons('drag_handle', ''));
    this.iconsList.push(this.iconsService.getIcons('edit', ''));
    this.iconsList.push(this.iconsService.getIcons('equalizer', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('error', ''));
    this.iconsList.push(this.iconsService.getIcons('expand_more', ''));
    this.iconsList.push(this.iconsService.getIcons('file_copy', ''));
    this.iconsList.push(this.iconsService.getIcons('filter_list', ''));
    this.iconsList.push(this.iconsService.getIcons('format_size', ''));
    this.iconsList.push(this.iconsService.getIcons('help_outline', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('home', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('image', ''));
    this.iconsList.push(this.iconsService.getIcons('important_devices', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('insert_invitation', ''));
    this.iconsList.push(this.iconsService.getIcons('location_on', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('mail', ''));
    this.iconsList.push(this.iconsService.getIcons('mail_outline', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('menu', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('monetization_on', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('notifications_none', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('number', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('pan_tool', ''));
    this.iconsList.push(this.iconsService.getIcons('person', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('radio_button_checked', ''));
    this.iconsList.push(this.iconsService.getIcons('settings', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('settings_backup_restore', ''));
    this.iconsList.push(this.iconsService.getIcons('tune', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('timelapse', ''));
    this.iconsList.push(this.iconsService.getIcons('verified_user', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('view_list', ''));
    this.iconsList.push(this.iconsService.getIcons('view_module', ''));
    this.iconsList.push(this.iconsService.getIcons('visibility', ''));
    this.iconsList.push(this.iconsService.getIcons('warning', ''));
    this.iconsList.push(this.iconsService.getIcons('top-empty', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('top-full', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('top-half', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('middle-empty', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('middle-full', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('middle-half', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('bottom-empty', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('bottom-full', 'initiafy'));
    this.iconsList.push(this.iconsService.getIcons('bottom-half', 'initiafy'));
  }
}
