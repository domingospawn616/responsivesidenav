import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NavDataServiceService } from '../nav-data-service.service';
import { NavData } from '../nav-data';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SideNavToggle } from './sidenavtoogle';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, MatIcon],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenSize: SideNavToggle = { collapsed: false, screenWidth: 0 };
  navData: NavData[];

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
