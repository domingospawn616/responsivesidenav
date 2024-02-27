import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ISideNavToggle } from '../sidenav/sidenavtoogle';
import { MatIcon } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, CdkMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() screenState :ISideNavToggle = {collapsed: false, screenWidth: 0};

  canShowSearchAsOverlay = false;
  selectedLanguage: any;
  languages = languages;
  notifications = notifications;
  userItems = userItems;

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[1];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  getHeadClass():string {
    let styleClass = '';
    if (this.screenState.collapsed && this.screenState.screenWidth > 768){
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number):void {
    if (innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
}
