import { Component, EventEmitter, Output } from '@angular/core';
import { NavDataServiceService } from '../nav-data-service.service';
import { NavData } from '../nav-data';
import { RouterModule } from '@angular/router';
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
  collapse = false;
  navData: NavData[];

  constructor(private sideNavService: NavDataServiceService){
    this.navData = sideNavService.getAllNavData() ?? [];
  }

  toggleCollapse():void{
    this.collapse = !this.collapse;
  }

  closeSideNav():void {
    this.collapse = false;
  }
}
