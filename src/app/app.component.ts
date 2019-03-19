import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentationService } from './core/documentation/documentation.service';
import { ContentComponent } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InitiafyDesignSystem';
  @ViewChild('content') content: ContentComponent;
  constructor(private startup: DocumentationService) {}
  ngOnInit() {
    // If there is no startup data received (maybe an error!)
    // navigate to error route
    if (!this.startup.startupData) {
      console.error('no startupdata');
    }
  }

  toggleNav() {
    this.content.drawer.toggle();
  }
}
