import { Component, Input } from '@angular/core';
import { ISideNavToggle } from '../sidenav/sidenavtoogle';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() screenState :ISideNavToggle = {collapsed: false, screenWidth: 0};

  getHeadClass():string {
    let styleClass = '';
    if (this.screenState.collapsed && this.screenState.screenWidth > 768){
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
}
