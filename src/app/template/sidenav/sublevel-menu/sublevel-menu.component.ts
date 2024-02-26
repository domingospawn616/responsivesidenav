import { Component, Input } from '@angular/core';
import { INavData } from '../../nav-data';
import { ISideNavToggle } from '../sidenavtoogle';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [MatIcon, RouterModule],
  templateUrl: './sublevel-menu.component.html',
  styleUrl: '../sidenav.component.scss'
})
export class SublevelMenuComponent {

  @Input() data: INavData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
}
