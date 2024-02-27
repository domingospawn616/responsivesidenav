import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NavDataServiceService } from '../nav-data-service.service';
import { INavData } from '../nav-data';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ISideNavToggle, fadeInOut } from './sidenavtoogle';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SublevelMenuComponent } from './sublevel-menu/sublevel-menu.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, MatIcon, SublevelMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'}),
        ]))
      ]),
    ]),
  ],
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<ISideNavToggle> = new EventEmitter();
  screenSize: ISideNavToggle = { collapsed: false, screenWidth: 0 };
  navData: INavData[];
  multiple: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenSize.screenWidth = window.innerWidth;
    if(this.screenSize.screenWidth <= 768){
      this.screenSize.collapsed = false;
      this.onToggleSideNav.emit(this.screenSize);
    }
  }

  constructor(
      private sideNavService: NavDataServiceService,
      public router: Router
    ){
    this.navData = sideNavService.getAllNavData() ?? [];
    this.screenSize.screenWidth = window.innerWidth;
  }

  toggleCollapse():void{
    this.screenSize.collapsed = !this.screenSize.collapsed;
    this.onToggleSideNav.emit(this.screenSize);
  }

  closeSideNav():void {
    this.screenSize.collapsed = false;
    this.onToggleSideNav.emit(this.screenSize);
  }

  handleClick(item: INavData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavData): void {
    if (!this.multiple){
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
  }
}
