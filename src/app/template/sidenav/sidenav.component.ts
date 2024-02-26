import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NavDataServiceService } from '../nav-data-service.service';
import { INavData } from '../nav-data';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ISideNavToggle } from './sidenavtoogle';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SublevelMenuComponent } from './sublevel-menu/sublevel-menu.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, MatIcon, SublevelMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}), 
        animate('1000ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opcacity: 1}),
        animate('1000ms', style({opacity: 0}))
      ])
    ]),

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenSize.screenWidth = window.innerWidth;
    if(this.screenSize.screenWidth <= 768){
      this.screenSize.collapsed = false;
      this.onToggleSideNav.emit(this.screenSize);
    }
  }

  constructor(private sideNavService: NavDataServiceService){
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
}
